# React Migration Plan for Quill & Ink

## Overview
Convert the existing vanilla HTML/CSS/JavaScript bookstore to use React components via CDN (no build tools required). This preserves the "no build step" requirement while modernizing the codebase.

## Approach
- Use React 18 via unpkg CDN
- Use Babel standalone for in-browser JSX transpilation
- Keep existing `styles.css` unchanged
- Convert `cart.js` IIFE to a React-compatible module
- Create reusable components in a new `components.js` file

---

## Files to Create/Modify

### 1. New File: `components.js`
Contains all reusable React components:

| Component | Description | Used In |
|-----------|-------------|---------|
| `Navbar` | Navigation bar with active page, mobile toggle, cart badge | All pages |
| `Footer` | Site footer | All pages |
| `Hero` | Hero section with title, subtitle, CTA | home, shop |
| `BookCard` | Book display card with add-to-cart | home, shop |
| `TeamCard` | Team member card (variant of BookCard) | about |
| `BookModal` | Modal with book details, reviews, review form | home, shop |
| `TeamModal` | Modal with team member bio | about |
| `StarRating` | Display star ratings | BookCard, BookModal |
| `StarPicker` | Interactive star selector for reviews | BookModal |
| `ReviewList` | List of reviews for a book | BookModal |
| `ReviewForm` | Form to submit a review | BookModal |
| `FeatureItem` | Feature highlight box | home |
| `ValueCard` | Company value card | about |
| `FilterButtons` | Category filter buttons | shop |
| `ContactInfo` | Contact details list | about |
| `ContactForm` | Contact message form | about |
| `CartTable` | Editable cart with qty controls | checkout |
| `ShippingForm` | Shipping address form | checkout |
| `PaymentForm` | Payment details form | checkout |
| `OrderSummary` | Order totals and place order | checkout |
| `Button` | Reusable button component | All pages |

### 2. Modify: `cart.js`
- Keep IIFE structure for backward compatibility
- Add React state integration via custom event dispatch
- Expose `useCart` hook-like subscription for React components

### 3. Modify: `home.html`
**Replace with React components:**
- Navigation → `<Navbar activePage="home" />`
- Hero section → `<Hero />` component
- Featured Books grid → `<BookGrid books={featuredBooks} />`
- Features section → `<FeaturesSection />`
- Book Modal → `<BookModal />`
- Footer → `<Footer />`

**Keep as static HTML:** None - full conversion

### 4. Modify: `about.html`
**Replace with React components:**
- Navigation → `<Navbar activePage="about" />`
- About intro → `<AboutIntro />`
- Values section → `<ValuesSection />`
- Team section → `<TeamSection />`
- Contact section → `<ContactSection />`
- Team Modal → `<TeamModal />`
- Footer → `<Footer />`

### 5. Modify: `shop.html`
**Replace with React components:**
- Navigation → `<Navbar activePage="shop" />`
- Shop header → `<Hero variant="shop" />`
- Filter buttons → `<FilterButtons />`
- Book grid → `<BookGrid books={allBooks} filterable />`
- Book Modal → `<BookModal />`
- Footer → `<Footer />`

### 6. Modify: `checkout.html`
**Replace with React components:**
- Navigation → `<Navbar activePage="cart" />`
- Cart table → `<CartTable />`
- Shipping form → `<ShippingForm />`
- Payment form → `<PaymentForm />`
- Order summary → `<OrderSummary />`
- Footer → `<Footer />`

---

## Data Structure

### Books Data (in `components.js`)
```javascript
const FEATURED_BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, stars: 4, category: "fiction", icon: "📖", desc: "..." },
  // ...
];

const ALL_BOOKS = [
  // All 12 books from shop.html
];

const TEAM_MEMBERS = [
  { name: "Emma Collins", role: "Founder & Head Curator", icon: "🧑‍💼", bio: "..." },
  // ...
];
```

---

## Implementation Steps

### Phase 1: Setup React Infrastructure
1. Create `components.js` with React/ReactDOM imports
2. Update `cart.js` to dispatch custom events for React integration
3. Add CDN script tags to all HTML files:
   - React 18
   - ReactDOM 18
   - Babel standalone

### Phase 2: Build Shared Components
1. `Navbar` component with props: `activePage`
2. `Footer` component (no props)
3. `Button` component with props: `variant`, `onClick`, `children`
4. `BookCard` component with props: `book`, `onTitleClick`, `onAddToCart`
5. `StarRating` component with props: `rating`, `max`

### Phase 3: Build Modal Components
1. `BookModal` component with state for open/close, current book
2. `StarPicker` component with props: `value`, `onChange`
3. `ReviewList` component with props: `reviews`
4. `ReviewForm` component with state for form fields

### Phase 4: Convert home.html
1. Add React root div
2. Create `HomePage` component composing all sections
3. Wire up BookModal state
4. Test add-to-cart functionality

### Phase 5: Convert shop.html
1. Add React root div
2. Create `ShopPage` component with filter state
3. Reuse BookCard and BookModal from Phase 3-4
4. Test category filtering

### Phase 6: Convert about.html
1. Add React root div
2. Create `AboutPage` component
3. Build `TeamCard`, `TeamModal`, `ValueCard`, `ContactForm`
4. Test team modal and contact form

### Phase 7: Convert checkout.html
1. Add React root div
2. Create `CheckoutPage` component with cart state
3. Build form components and cart table
4. Test cart operations and place order

### Phase 8: Testing & Polish
1. Verify cart persistence across page navigation
2. Test responsive behavior
3. Verify all modals work correctly
4. Test form submissions

---

## Key Technical Decisions

1. **No build tools**: Use Babel standalone (`@babel/standalone`) for JSX transpilation
2. **State management**: Use React's `useState` and custom events from cart.js
3. **localStorage**: Keep existing localStorage keys (`quillAndInkCart`, `quillInkReviews`)
4. **CSS**: No changes to `styles.css` - components use existing class names
5. **ES5 compatibility**: Components written in JSX but transpiled by Babel

---

## File Structure After Migration

```
assignment2-4503C/
├── home.html          (React-powered)
├── about.html         (React-powered)
├── shop.html          (React-powered)
├── checkout.html      (React-powered)
├── components.js      (NEW - all React components)
├── cart.js            (modified - React event integration)
├── styles.css         (unchanged)
├── quill-logo.png     (unchanged)
└── CLAUDE.md          (unchanged)
```

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Babel standalone adds ~200KB | Acceptable for learning project; use production React builds |
| No HMR/fast refresh | Acceptable - manual refresh during development |
| SEO impact | Static content still in HTML, React hydrates on top |

---

## Estimated Changes

- **home.html**: ~200 lines → ~50 lines HTML + components
- **about.html**: ~220 lines → ~50 lines HTML + components
- **shop.html**: ~385 lines → ~50 lines HTML + components
- **checkout.html**: ~240 lines → ~50 lines HTML + components
- **components.js**: ~600-800 lines (new file)
- **cart.js**: ~130 lines → ~150 lines (minor additions)
