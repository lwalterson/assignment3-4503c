const fs = require('fs');
const path = require('path');

// ── Configuration ──────────────────────────────────────────────────────────────
const INPUT_PATH = 'C:/Users/laure/.claude/projects/C--la115175-assignment2-4503C/23d12d00-6be6-407d-bdd4-4056c299515c.jsonl';
const OUTPUT_PATH = path.join(__dirname, 'transcript.html');

// ── Read & parse JSONL ─────────────────────────────────────────────────────────
const raw = fs.readFileSync(INPUT_PATH, 'utf8');
const entries = raw.split('\n').filter(Boolean).map(line => {
  try { return JSON.parse(line); }
  catch { return null; }
}).filter(Boolean);

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Strip <system-reminder>...</system-reminder> blocks (including multiline) */
function stripSystemReminders(text) {
  if (!text) return '';
  return text.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '').trim();
}

/** Very light markdown-to-HTML conversion */
function mdToHtml(text) {
  if (!text) return '';
  let html = escapeHtml(text);

  // Code blocks: ```lang\n...\n```
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold **text** or __text__
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // Italic *text* or _text_ (but not inside words with underscores)
  html = html.replace(/(?<!\w)\*([^*]+?)\*(?!\w)/g, '<em>$1</em>');
  html = html.replace(/(?<!\w)_([^_]+?)_(?!\w)/g, '<em>$1</em>');

  // Headings (lines starting with # at start or after newline)
  html = html.replace(/(^|\n)#### (.+)/g, '$1<h6>$2</h6>');
  html = html.replace(/(^|\n)### (.+)/g, '$1<h5>$2</h5>');
  html = html.replace(/(^|\n)## (.+)/g, '$1<h4>$2</h4>');
  html = html.replace(/(^|\n)# (.+)/g, '$1<h3>$2</h3>');

  // Unordered lists: lines starting with - or *
  html = html.replace(/(^|\n)([-*] .+(?:\n[-*] .+)*)/g, (_, pre, block) => {
    const items = block.split('\n').map(l => `<li>${l.replace(/^[-*] /, '')}</li>`).join('');
    return `${pre}<ul>${items}</ul>`;
  });

  // Ordered lists: lines starting with digit.
  html = html.replace(/(^|\n)(\d+\. .+(?:\n\d+\. .+)*)/g, (_, pre, block) => {
    const items = block.split('\n').map(l => `<li>${l.replace(/^\d+\. /, '')}</li>`).join('');
    return `${pre}<ol>${items}</ol>`;
  });

  // Paragraphs (double newlines)
  html = html.replace(/\n\n/g, '</p><p>');

  // Single newlines to <br>
  html = html.replace(/\n/g, '<br>');

  return `<p>${html}</p>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatTimestamp(ts) {
  if (!ts) return '';
  try {
    const d = new Date(ts);
    return d.toLocaleString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
  } catch { return ts; }
}

/** Truncate long strings for display */
function truncate(str, max = 300) {
  if (!str) return '';
  if (str.length <= max) return str;
  return str.slice(0, max) + '...';
}

// ── Extract messages ───────────────────────────────────────────────────────────

const messages = []; // { role, timestamp, textParts[], toolUseParts[], toolResultParts[] }

// Deduplicate assistant messages: same requestId can appear multiple times as
// streaming updates. We want only the most complete one per uuid.
// Actually, looking at the data, each line has a unique uuid but they share the
// same message id. We want to collect all content blocks across lines that share
// the same assistant message id, building up the full message.

// Strategy: Walk through entries, group assistant messages by their message.id,
// keep accumulating content blocks. For user messages, emit directly.

const assistantMessages = new Map(); // message.id -> { timestamp, contentBlocks[], uuid }
const messageOrder = []; // ordered list of { role, key } to reconstruct order

let lastAssistantId = null;

for (const entry of entries) {
  if (entry.type === 'user') {
    const content = entry.message?.content;
    if (!content) continue;

    // Check if this is a tool_result message
    if (Array.isArray(content)) {
      const hasToolResult = content.some(b => b.type === 'tool_result');
      if (hasToolResult) {
        // Attach tool results to the most recent assistant message
        const toolResults = content.filter(b => b.type === 'tool_result');
        if (lastAssistantId && assistantMessages.has(lastAssistantId)) {
          const am = assistantMessages.get(lastAssistantId);
          for (const tr of toolResults) {
            am.contentBlocks.push({
              type: 'tool_result',
              tool_use_id: tr.tool_use_id,
              content: typeof tr.content === 'string' ? tr.content : JSON.stringify(tr.content)
            });
          }
        }
        continue;
      }

      // Regular user message with content array
      const textParts = content
        .filter(b => b.type === 'text')
        .map(b => stripSystemReminders(b.text))
        .filter(Boolean);
      if (textParts.length === 0) continue;
      messageOrder.push({ role: 'user', key: entry.uuid });
      messages.push({
        role: 'user',
        timestamp: entry.timestamp,
        text: textParts.join('\n\n')
      });
    } else if (typeof content === 'string') {
      const cleaned = stripSystemReminders(content);
      if (!cleaned) continue;
      messageOrder.push({ role: 'user', key: entry.uuid });
      messages.push({
        role: 'user',
        timestamp: entry.timestamp,
        text: cleaned
      });
    }
  } else if (entry.type === 'assistant') {
    const msgId = entry.message?.id;
    if (!msgId) continue;
    lastAssistantId = msgId;

    if (!assistantMessages.has(msgId)) {
      assistantMessages.set(msgId, {
        timestamp: entry.timestamp,
        contentBlocks: [],
        firstUuid: entry.uuid
      });
      messageOrder.push({ role: 'assistant', key: msgId });
    }

    const am = assistantMessages.get(msgId);
    // Update timestamp to latest
    if (entry.timestamp) am.timestamp = entry.timestamp;

    const contentArr = entry.message?.content;
    if (Array.isArray(contentArr)) {
      for (const block of contentArr) {
        // Skip thinking blocks
        if (block.type === 'thinking') continue;
        // Skip "(no content)" text
        if (block.type === 'text' && block.text === '(no content)') continue;

        am.contentBlocks.push(block);
      }
    }
  } else if (entry.type === 'summary') {
    const summaryText = entry.summary || entry.message?.content;
    if (summaryText) {
      messageOrder.push({ role: 'summary', key: entry.uuid || 'summary-' + Date.now() });
      messages.push({
        role: 'summary',
        timestamp: entry.timestamp,
        text: typeof summaryText === 'string' ? summaryText : JSON.stringify(summaryText)
      });
    }
  }
  // Skip file-history-snapshot, system, progress types
}

// ── Build final ordered message list ───────────────────────────────────────────
const finalMessages = [];
const seenKeys = new Set();

for (const item of messageOrder) {
  if (seenKeys.has(item.key)) continue;
  seenKeys.add(item.key);

  if (item.role === 'user' || item.role === 'summary') {
    const msg = messages.find(m => m.role === item.role);
    if (msg) {
      finalMessages.push(msg);
      // Remove from messages array so next find gets next one
      messages.splice(messages.indexOf(msg), 1);
    }
  } else if (item.role === 'assistant') {
    const am = assistantMessages.get(item.key);
    if (!am) continue;

    // Deduplicate content blocks: tool_use blocks can appear in multiple
    // streaming updates. Dedupe by block id for tool_use, or by text content.
    const seen = new Set();
    const uniqueBlocks = [];
    for (const block of am.contentBlocks) {
      let blockKey;
      if (block.type === 'tool_use') {
        blockKey = 'tool_use:' + block.id;
      } else if (block.type === 'tool_result') {
        blockKey = 'tool_result:' + block.tool_use_id;
      } else if (block.type === 'text') {
        blockKey = 'text:' + block.text;
      } else {
        blockKey = JSON.stringify(block);
      }
      if (seen.has(blockKey)) continue;
      seen.add(blockKey);
      uniqueBlocks.push(block);
    }

    // Build text and tool parts
    const textParts = uniqueBlocks
      .filter(b => b.type === 'text')
      .map(b => stripSystemReminders(b.text))
      .filter(Boolean);
    const toolUseParts = uniqueBlocks.filter(b => b.type === 'tool_use');
    const toolResultParts = uniqueBlocks.filter(b => b.type === 'tool_result');

    if (textParts.length === 0 && toolUseParts.length === 0) continue;

    finalMessages.push({
      role: 'assistant',
      timestamp: am.timestamp,
      text: textParts.join('\n\n'),
      toolUse: toolUseParts,
      toolResults: toolResultParts
    });
  }
}

// ── Generate HTML ──────────────────────────────────────────────────────────────

function renderToolUse(tool) {
  const name = escapeHtml(tool.name || 'unknown');
  let inputStr;
  if (typeof tool.input === 'object') {
    // For Write tool, truncate the content field
    const displayInput = { ...tool.input };
    if (displayInput.content && displayInput.content.length > 500) {
      displayInput.content = displayInput.content.slice(0, 500) + '\n... [truncated]';
    }
    inputStr = escapeHtml(JSON.stringify(displayInput, null, 2));
  } else {
    inputStr = escapeHtml(String(tool.input));
  }
  return `
    <details class="tool-use">
      <summary>Tool: <strong>${name}</strong></summary>
      <pre class="tool-input"><code>${inputStr}</code></pre>
    </details>`;
}

function renderToolResult(tr) {
  const content = truncate(typeof tr.content === 'string' ? tr.content : JSON.stringify(tr.content), 200);
  return `
    <details class="tool-result">
      <summary>Tool Result</summary>
      <pre class="tool-result-content"><code>${escapeHtml(content)}</code></pre>
    </details>`;
}

let messagesHtml = '';
for (const msg of finalMessages) {
  const ts = formatTimestamp(msg.timestamp);
  const timeHtml = ts ? `<span class="timestamp">${escapeHtml(ts)}</span>` : '';

  if (msg.role === 'summary') {
    messagesHtml += `
    <div class="message summary-message">
      <div class="message-header">
        <span class="role-label summary-label">Summary of Earlier Conversation</span>
        ${timeHtml}
      </div>
      <div class="message-body">${mdToHtml(msg.text)}</div>
    </div>`;
  } else if (msg.role === 'user') {
    messagesHtml += `
    <div class="message user-message">
      <div class="message-header">
        <span class="role-label user-label">User</span>
        ${timeHtml}
      </div>
      <div class="message-body">${mdToHtml(msg.text)}</div>
    </div>`;
  } else if (msg.role === 'assistant') {
    let bodyHtml = '';
    if (msg.text) {
      bodyHtml += mdToHtml(msg.text);
    }
    if (msg.toolUse && msg.toolUse.length > 0) {
      // Pair tool_use with their results
      for (const tu of msg.toolUse) {
        bodyHtml += renderToolUse(tu);
        const matchingResult = (msg.toolResults || []).find(tr => tr.tool_use_id === tu.id);
        if (matchingResult) {
          bodyHtml += renderToolResult(matchingResult);
        }
      }
    }
    messagesHtml += `
    <div class="message assistant-message">
      <div class="message-header">
        <span class="role-label assistant-label">Assistant (Claude)</span>
        ${timeHtml}
      </div>
      <div class="message-body">${bodyHtml}</div>
    </div>`;
  }
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quill &amp; Ink - Claude Code Transcript</title>
  <style>
    /* ── Reset & Base ─────────────────────────────────── */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: #f0f2f5;
      color: #1a1a2e;
      line-height: 1.65;
      padding: 0;
    }

    /* ── Header ───────────────────────────────────────── */
    .page-header {
      background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
      color: #fff;
      padding: 2.5rem 2rem;
      text-align: center;
    }
    .page-header h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
      letter-spacing: 0.5px;
    }
    .page-header h1 span { color: #b68d40; }
    .page-header p {
      color: #94a3b8;
      font-size: 0.95rem;
    }

    /* ── Container ────────────────────────────────────── */
    .container {
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1.5rem 3rem;
    }

    /* ── Messages ─────────────────────────────────────── */
    .message {
      border-radius: 10px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      border-left: 4px solid transparent;
    }

    .user-message {
      background: #dbeafe;
      border-left-color: #3b82f6;
    }

    .assistant-message {
      background: #f3f4f6;
      border-left-color: #6b7280;
    }

    .summary-message {
      background: #fef3c7;
      border-left-color: #d97706;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.65rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .role-label {
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }
    .user-label { background: #3b82f6; color: #fff; }
    .assistant-label { background: #6b7280; color: #fff; }
    .summary-label { background: #d97706; color: #fff; }

    .timestamp {
      font-size: 0.78rem;
      color: #64748b;
    }

    .message-body {
      font-size: 0.93rem;
      line-height: 1.7;
      overflow-wrap: break-word;
    }
    .message-body p { margin-bottom: 0.5rem; }
    .message-body p:last-child { margin-bottom: 0; }

    .message-body h3, .message-body h4, .message-body h5, .message-body h6 {
      margin: 0.75rem 0 0.35rem;
      color: #1e293b;
    }

    .message-body ul, .message-body ol {
      margin: 0.4rem 0 0.4rem 1.5rem;
    }
    .message-body li { margin-bottom: 0.2rem; }
    .message-body ul { list-style: disc; }
    .message-body ol { list-style: decimal; }

    .message-body code {
      background: #e2e8f0;
      padding: 0.15rem 0.4rem;
      border-radius: 3px;
      font-size: 0.87em;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    }

    .message-body pre {
      background: #1e293b;
      color: #e2e8f0;
      padding: 1rem 1.25rem;
      border-radius: 6px;
      overflow-x: auto;
      margin: 0.75rem 0;
      font-size: 0.85rem;
      line-height: 1.5;
    }
    .message-body pre code {
      background: none;
      padding: 0;
      color: inherit;
      font-size: inherit;
    }

    .message-body strong { font-weight: 700; }
    .message-body em { font-style: italic; }

    /* ── Tool use / result collapsibles ───────────────── */
    details.tool-use, details.tool-result {
      margin: 0.6rem 0;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      overflow: hidden;
    }
    details.tool-use summary, details.tool-result summary {
      padding: 0.55rem 0.9rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      user-select: none;
    }
    details.tool-use summary { background: #e0e7ff; color: #3730a3; }
    details.tool-result summary { background: #dcfce7; color: #166534; }

    details.tool-use pre, details.tool-result pre {
      margin: 0;
      border-radius: 0;
      font-size: 0.8rem;
      max-height: 400px;
      overflow: auto;
    }

    /* ── Footer ───────────────────────────────────────── */
    .page-footer {
      text-align: center;
      padding: 1.5rem;
      color: #94a3b8;
      font-size: 0.82rem;
      border-top: 1px solid #e2e8f0;
      max-width: 900px;
      margin: 0 auto;
    }

    /* ── Responsive ───────────────────────────────────── */
    @media (max-width: 640px) {
      .page-header h1 { font-size: 1.5rem; }
      .container { padding: 0 1rem 2rem; }
      .message { padding: 1rem; }
    }

    /* ── Print ────────────────────────────────────────── */
    @media print {
      body { background: #fff; }
      .page-header { background: #2c3e50 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .message { break-inside: avoid; box-shadow: none; border: 1px solid #ccc; }
      .user-message { background: #dbeafe !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .assistant-message { background: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .summary-message { background: #fef3c7 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      details { display: block; }
      details[open] summary ~ * { display: block; }
    }
  </style>
</head>
<body>
  <header class="page-header">
    <h1>Quill <span>&amp;</span> Ink &mdash; Claude Code Transcript</h1>
    <p>Session exported on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </header>

  <main class="container">
${messagesHtml}
  </main>

  <footer class="page-footer">
    Generated from Claude Code session &bull; ${finalMessages.length} messages
  </footer>
</body>
</html>`;

fs.writeFileSync(OUTPUT_PATH, html, 'utf8');
console.log(`Transcript written to: ${OUTPUT_PATH}`);
console.log(`Total messages: ${finalMessages.length}`);
