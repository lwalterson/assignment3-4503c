# Quill & Ink — Online Bookstore

## Project Type
Static e-commerce website built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools.

## Tech Stack
- HTML5, CSS3, JavaScript (ES5, IIFE pattern)
- localStorage for cart and review persistence
- No external dependencies

## Structure
- `home.html` — Landing page with featured books
- `shop.html` — Product catalog with category filtering
- `about.html` — Company info, team bios, contact form
- `checkout.html` — Cart management and checkout flow
- `styles.css` — All styles, CSS custom properties, responsive (breakpoint 768px)
- `cart.js` — Cart module (IIFE): add/remove/update items, badge updates, localStorage key `quillAndInkCart`
- `quill-logo.png` — Site logo

## Running Locally
No build step. Open HTML files directly or serve with:
```
npx http-server -p 8080
```
Then visit `http://127.0.0.1:8080/home.html`.

## Key Details
- Reviews stored in localStorage under key `quillInkReviews`
- Free shipping over $35, otherwise $4.99
- Forms are UI-only (no backend)
- Color scheme: dark navy (#1c2044), teal (#204854), coral accents
- Typography: Georgia serif
