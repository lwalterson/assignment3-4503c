Step-by-Step Plan: Add Upcoming Events Section
Step 1: Add Static HTML Markup (5 min)
Create the HTML structure for the events section in home.html. This is a simple container with event cards that display hardcoded event data.

Add a new <section id="events"> before the root div or within the HomePage component
Include 2-3 sample events with title, date, and description
Test: Open home.html in browser and verify the section appears (unstyled is fine)
Step 2: Style the Events Section (5-7 min)
Add CSS to styles.css to match the site's design system.

Create styles for .events-container, .event-card, .event-date, .event-title, .event-description
Use existing color variables (navy, teal, coral) and Georgia serif font
Make it responsive (stack on mobile, grid on desktop)
Test: Reload the page and verify layout matches the Quill & Ink aesthetic
Step 3: Create Events Data Structure (3 min)
Define the events data (array of objects) in a way that's easy to maintain.

Create a simple JavaScript object/array with event details (title, date, description, maybe a category)
Keep it in a separate section or within the component
Test: Open browser console and verify the data structure is accessible
Step 4: Render Events Dynamically (5-7 min)
Use JavaScript to render events from the data structure instead of hardcoding HTML.

Loop through the events array and generate HTML dynamically
Replace the static markup from Step 1
Test: Reload page, verify events display the same but are now dynamic
Step 5: Add Event Filtering (Optional) (5-10 min)
Allow users to filter events by category (e.g., "Book Signing," "Reading Club," "Workshop").

Add filter buttons above the events
Implement click handlers to show/hide events by category
Test: Click filters and verify only matching events display
Step 6: Add LocalStorage Persistence (Optional) (5-7 min)
Save user's filter preference or "interested events" to localStorage.

Store which events the user is interested in
Restore preference on page reload
Test: Select events, refresh page, verify selection persists
Recommended approach: Start with Steps 1-2, then 3-4. Steps 5-6 are enhancement features you can add if time permits.
