/* ===== Quill & Ink — React Components ===== */

// ==================== DATA ====================

var FEATURED_BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, stars: 4, category: "fiction", icon: "\u{1F4D6}", cover: "cover-gatsby.png", desc: "A tale of wealth, obsession, and the American Dream set in the Jazz Age. Jay Gatsby's lavish lifestyle hides a desperate longing for the past." },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.50, stars: 5, category: "fiction", icon: "\u{1F4DA}", cover: "cover-mockingbird.png", desc: "Through the eyes of young Scout Finch, this classic explores racial injustice and moral courage in the American South during the 1930s." },
  { id: 3, title: "1984", author: "George Orwell", price: 11.99, stars: 5, category: "science-fiction", icon: "\u{1F4D5}", cover: "cover-1984.png", desc: "A chilling dystopia where Big Brother watches all. Winston Smith dares to think forbidden thoughts in a world of total surveillance and control." },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 10.99, stars: 4, category: "fiction", icon: "\u{1F4D9}", cover: "cover-pride.png", desc: "Elizabeth Bennet navigates love, class, and misunderstanding in Regency-era England in this beloved romantic comedy of manners." }
];

var ALL_BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, stars: 4, category: "fiction", icon: "\u{1F4D6}", cover: "cover-gatsby.png", desc: "A tale of wealth, obsession, and the American Dream set in the Jazz Age. Jay Gatsby's lavish lifestyle hides a desperate longing for the past." },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.50, stars: 5, category: "fiction", icon: "\u{1F4DA}", cover: "cover-mockingbird.png", desc: "Through the eyes of young Scout Finch, this classic explores racial injustice and moral courage in the American South during the 1930s." },
  { id: 3, title: "1984", author: "George Orwell", price: 11.99, stars: 5, category: "science-fiction", icon: "\u{1F4D5}", cover: "cover-1984.png", desc: "A chilling dystopia where Big Brother watches all. Winston Smith dares to think forbidden thoughts in a world of total surveillance and control." },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 10.99, stars: 4, category: "fiction", icon: "\u{1F4D9}", cover: "cover-pride.png", desc: "Elizabeth Bennet navigates love, class, and misunderstanding in Regency-era England in this beloved romantic comedy of manners." },
  { id: 5, title: "Dune", author: "Frank Herbert", price: 15.99, stars: 5, category: "science-fiction", icon: "\u{1F4D8}", desc: "On the desert planet Arrakis, young Paul Atreides is thrust into an epic struggle for control of the most valuable substance in the universe." },
  { id: 6, title: "Beloved", author: "Toni Morrison", price: 13.50, stars: 4, category: "fiction", icon: "\u{1F4D7}", desc: "A former enslaved woman is haunted by the ghost of her past in this powerful exploration of memory, trauma, and the legacy of slavery." },
  { id: 7, title: "Sapiens", author: "Yuval Noah Harari", price: 18.00, stars: 4, category: "non-fiction", icon: "\u{1F4D6}", desc: "A sweeping history of humankind from the Stone Age to the present, exploring how biology, culture, and economics shaped our species." },
  { id: 8, title: "The Road", author: "Cormac McCarthy", price: 13.99, stars: 4, category: "fiction", icon: "\u{1F4DA}", desc: "A father and son journey through a bleak, post-apocalyptic landscape, clinging to hope and each other in a world stripped of civilization." },
  { id: 9, title: "Leaves of Grass", author: "Walt Whitman", price: 11.50, stars: 5, category: "poetry", icon: "\u{1F4D6}", desc: "Whitman's landmark poetry collection celebrates the self, nature, and democracy with bold free verse that redefined American literature." },
  { id: 10, title: "Milk and Honey", author: "Rupi Kaur", price: 9.99, stars: 4, category: "poetry", icon: "\u{1F4DA}", desc: "A collection of poetry and prose about survival, divided into four chapters that explore the hurting, the loving, the breaking, and the healing." },
  { id: 11, title: "Educated", author: "Tara Westover", price: 14.99, stars: 5, category: "non-fiction", icon: "\u{1F4D5}", desc: "A memoir of a woman who grew up in a survivalist family and never attended school, yet went on to earn a PhD from Cambridge University." },
  { id: 12, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", price: 12.50, stars: 4, category: "science-fiction", icon: "\u{1F4D7}", desc: "An envoy visits a world where people have no fixed gender, challenging assumptions about identity and society in this groundbreaking sci-fi novel." }
];

var TEAM_MEMBERS = [
  { name: "Emma Collins", role: "Founder & Head Curator", icon: "\u{1F9D1}\u200D\u{1F4BC}", bio: "Emma founded Quill & Ink in 2018 after a decade working in publishing. A lifelong bibliophile with a knack for spotting hidden gems, she personally reads every title before it earns a spot in the catalogue. When she's not buried in manuscripts, you'll find her hosting the store's monthly book club or exploring Portland's independent bookshops." },
  { name: "Daniel Reyes", role: "Operations Manager", icon: "\u{1F9D1}\u200D\u{1F4BB}", bio: "Daniel keeps everything running smoothly behind the scenes. With a background in logistics and supply-chain management, he ensures every order is packed with care and delivered on time. He's also the team's resident non-fiction enthusiast and is always ready with a recommendation on history or economics." },
  { name: "Sarah Nguyen", role: "Creative Director", icon: "\u{1F9D1}\u200D\u{1F3A8}", bio: "Sarah brings Quill & Ink's visual identity to life. From the website design to packaging artwork, her creative vision shapes every customer touchpoint. A former gallery curator turned graphic designer, she believes beautiful presentation makes the reading experience even more special." }
];

var FEATURES = [
  { icon: "\u{1F69A}", title: "Free Shipping", desc: "On all orders over $35. Fast, reliable delivery right to your door." },
  { icon: "\u{1F512}", title: "Secure Payments", desc: "Your transactions are protected with industry-standard encryption." },
  { icon: "\u{1F4F9}", title: "Curated Selection", desc: "Every title is hand-selected by our team of passionate readers." },
  { icon: "\u{1F4AC}", title: "Reader Support", desc: "Have a question? Our friendly team is here to help you find the perfect book." }
];

var UPCOMING_EVENTS = [
  { id: 1, type: "book-club", icon: "📚", title: "Classic Literature Book Club", date: "2026-03-15", time: "19:00", location: "Portland, OR", isVirtual: false, description: "Join us for a deep dive into the themes and characters of Pride and Prejudice. All readers welcome!" },
  { id: 2, type: "author-event", icon: "✍️", title: "Local Author Q&A: Sarah Chen", date: "2026-03-22", time: "18:30", location: "Online (Zoom)", isVirtual: true, description: "Meet debut novelist Sarah Chen as she discusses her award-winning novel and the writing process behind it." },
  { id: 3, type: "live-event", icon: "🎤", title: "Poetry Slam & Open Mic Night", date: "2026-04-05", time: "20:00", location: "Portland, OR", isVirtual: false, description: "Celebrate the written word with live poetry, original works, and an open mic for emerging poets." }
];

var VALUES = [
  { icon: "\u270D\uFE0F", title: "Thoughtful Curation", desc: "We read before we recommend. Every book on our shelves has earned its place through literary merit and reader impact." },
  { icon: "\u{1F30E}", title: "Sustainability", desc: "We use recycled packaging and partner with eco-conscious publishers to reduce our environmental footprint." },
  { icon: "\u{1F91D}", title: "Community", desc: "We host monthly virtual book clubs and support local literacy programs because reading is better together." }
];

var CONTACT_INFO = [
  { icon: "\u{1F4CD}", label: "Address", value: "42 Bookbinder Lane, Portland, OR 97201" },
  { icon: "\u{1F4E7}", label: "Email", value: "hello@quillandink.com" },
  { icon: "\u{1F4DE}", label: "Phone", value: "(503) 555-0178" },
  { icon: "\u{1F550}", label: "Hours", value: "Mon \u2013 Fri: 9 AM \u2013 6 PM (PST)\nSat \u2013 Sun: 10 AM \u2013 4 PM (PST)" }
];

var REVIEW_KEY = "quillInkReviews";

// ==================== UTILITY FUNCTIONS ====================

function getReviews() {
  try { return JSON.parse(localStorage.getItem(REVIEW_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveReview(title, review) {
  var all = getReviews();
  if (!all[title]) all[title] = [];
  all[title].push(review);
  localStorage.setItem(REVIEW_KEY, JSON.stringify(all));
}

function starsString(count) {
  var s = "";
  for (var i = 1; i <= 5; i++) s += i <= count ? "\u2605" : "\u2606";
  return s;
}

// ==================== COMPONENTS ====================

// ---------- Button ----------
function Button(props) {
  var className = "btn";
  if (props.variant === "primary") className += " btn-primary";
  else if (props.variant === "secondary") className += " btn-secondary";
  if (props.className) className += " " + props.className;

  return React.createElement("button", {
    className: className,
    onClick: props.onClick,
    style: props.style
  }, props.children);
}

// ---------- Navbar ----------
function Navbar(props) {
  var _React$useState = React.useState(false),
      menuOpen = _React$useState[0],
      setMenuOpen = _React$useState[1];

  var _React$useState2 = React.useState(Cart.totalCount()),
      cartCount = _React$useState2[0],
      setCartCount = _React$useState2[1];

  React.useEffect(function() {
    function handleCartUpdate() {
      setCartCount(Cart.totalCount());
    }
    window.addEventListener("cartUpdated", handleCartUpdate);
    return function() {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  var navLinks = [
    { href: "home.html", label: "Home", page: "home" },
    { href: "about.html", label: "About", page: "about" },
    { href: "shop.html", label: "Shop", page: "shop" }
  ];

  return React.createElement("nav", { className: "navbar" },
    React.createElement("div", { className: "container" },
      React.createElement("a", { href: "home.html", className: "logo" },
        React.createElement("img", { src: "quill-logo.png", alt: "Quill & Ink logo" }),
        " Quill ",
        React.createElement("span", null, "&"),
        " Ink"
      ),
      React.createElement("ul", { className: "nav-links" + (menuOpen ? " open" : ""), id: "navLinks" },
        navLinks.map(function(link) {
          return React.createElement("li", { key: link.page },
            React.createElement("a", {
              href: link.href,
              className: props.activePage === link.page ? "active" : ""
            }, link.label)
          );
        }),
        React.createElement("li", null,
          React.createElement("a", {
            href: "checkout.html",
            className: "nav-cart-link" + (props.activePage === "cart" ? " active" : "")
          },
            "Cart ",
            React.createElement("span", {
              className: "cart-count",
              style: { display: cartCount > 0 ? "inline-flex" : "none" }
            }, cartCount)
          )
        )
      ),
      React.createElement("button", {
        className: "menu-toggle",
        onClick: toggleMenu,
        "aria-label": "Toggle navigation"
      },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null)
      )
    )
  );
}

// ---------- Footer ----------
function Footer() {
  return React.createElement("footer", { className: "footer" },
    React.createElement("p", null,
      "\u00A9 2026 Quill ",
      React.createElement("span", null, "&"),
      " Ink. All rights reserved."
    )
  );
}

// ---------- Hero ----------
function Hero(props) {
  var heroClass = "hero";
  if (props.variant === "teal") heroClass += " hero-teal";

  var style = props.style || {};

  return React.createElement("section", { className: heroClass, style: style },
    React.createElement("h1", null,
      props.titlePrefix || "",
      props.titleHighlight ? React.createElement("span", null, props.titleHighlight) : null,
      props.titleSuffix || ""
    ),
    React.createElement("p", null, props.subtitle),
    props.ctaText && React.createElement("a", {
      href: props.ctaHref,
      className: "btn btn-primary"
    }, props.ctaText)
  );
}

// ---------- StarRating ----------
function StarRating(props) {
  return React.createElement("span", { className: "stars" }, starsString(props.rating));
}

// ---------- BookCard ----------
function BookCard(props) {
  var book = props.book;

  var _React$useState3 = React.useState(false),
      added = _React$useState3[0],
      setAdded = _React$useState3[1];

  function handleAddToCart(e) {
    e.preventDefault();
    Cart.addItem(book.title, book.author, book.price);
    setAdded(true);
    setTimeout(function() { setAdded(false); }, 1000);
  }

  function handleTitleClick() {
    if (props.onTitleClick) props.onTitleClick(book);
  }

  return React.createElement("div", {
    className: "book-card" + (props.hidden ? " hidden" : ""),
    "data-category": book.category,
    "data-desc": book.desc
  },
    React.createElement("div", { className: "thumb" },
      book.cover
        ? React.createElement("img", { src: book.cover, alt: book.title + " cover" })
        : book.icon
    ),
    React.createElement("div", { className: "info" },
      React.createElement("h3", { onClick: handleTitleClick, style: { cursor: "pointer" } }, book.title),
      React.createElement("p", { className: "author" }, book.author),
      React.createElement(StarRating, { rating: book.stars }),
      React.createElement("p", { className: "price" }, "$" + book.price.toFixed(2)),
      React.createElement("button", {
        className: "btn btn-primary add-to-cart-btn" + (added ? " btn-added" : ""),
        onClick: handleAddToCart
      }, added ? "Added!" : "Add to Cart")
    )
  );
}

// ---------- BookGrid ----------
function BookGrid(props) {
  return React.createElement("div", { className: "book-grid", id: "bookGrid" },
    props.books.map(function(book) {
      var hidden = props.filter && props.filter !== "all" && book.category !== props.filter;
      return React.createElement(BookCard, {
        key: book.id,
        book: book,
        hidden: hidden,
        onTitleClick: props.onTitleClick
      });
    }),
    props.showNoResults && React.createElement("p", {
      className: "no-results" + (props.noResultsVisible ? " visible" : ""),
      id: "noResults"
    }, "No books found in this category.")
  );
}

// ---------- FilterButtons ----------
function FilterButtons(props) {
  var filters = [
    { value: "all", label: "All" },
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "science-fiction", label: "Science Fiction" },
    { value: "poetry", label: "Poetry" }
  ];

  return React.createElement("div", { className: "shop-controls" },
    filters.map(function(f) {
      return React.createElement("button", {
        key: f.value,
        className: "filter-btn" + (props.activeFilter === f.value ? " active" : ""),
        "data-filter": f.value,
        onClick: function() { props.onFilterChange(f.value); }
      }, f.label);
    })
  );
}

// ---------- StarPicker ----------
function StarPicker(props) {
  function handleClick(value) {
    props.onChange(value);
  }

  return React.createElement("div", { className: "star-picker", id: "starPicker" },
    [1, 2, 3, 4, 5].map(function(i) {
      return React.createElement("span", {
        key: i,
        "data-value": i,
        className: i <= props.value ? "active" : "",
        onClick: function() { handleClick(i); }
      }, "\u2605");
    })
  );
}

// ---------- ReviewItem ----------
function ReviewItem(props) {
  var r = props.review;
  var nameDisplay = r.name || "Anonymous";

  return React.createElement("div", { className: "review-item" },
    React.createElement("div", { className: "review-header" },
      React.createElement("span", { className: "review-name" }, nameDisplay),
      React.createElement("span", { className: "review-stars" }, starsString(r.rating))
    ),
    r.text && React.createElement("p", { className: "review-text" }, r.text)
  );
}

// ---------- ReviewList ----------
function ReviewList(props) {
  var reviews = props.reviews || [];

  if (reviews.length === 0) {
    return React.createElement("p", { className: "no-reviews" }, "No reviews yet. Be the first!");
  }

  return React.createElement("div", { id: "modalReviews" },
    reviews.map(function(r, i) {
      return React.createElement(ReviewItem, { key: i, review: r });
    })
  );
}

// ---------- ReviewForm ----------
function ReviewForm(props) {
  var _React$useState4 = React.useState(""),
      name = _React$useState4[0],
      setName = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      rating = _React$useState5[0],
      setRating = _React$useState5[1];

  var _React$useState6 = React.useState(""),
      text = _React$useState6[0],
      setText = _React$useState6[1];

  function handleSubmit() {
    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }
    props.onSubmit({ name: name.trim() || "", rating: rating, text: text.trim() });
    setName("");
    setRating(0);
    setText("");
  }

  return React.createElement("div", { className: "review-form" },
    React.createElement("h4", null, "Leave a Review"),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "reviewName" }, "Your Name (optional)"),
      React.createElement("input", {
        type: "text",
        id: "reviewName",
        placeholder: "Anonymous",
        value: name,
        onChange: function(e) { setName(e.target.value); }
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", null, "Rating"),
      React.createElement(StarPicker, { value: rating, onChange: setRating })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "reviewText" }, "Your Review (optional)"),
      React.createElement("textarea", {
        id: "reviewText",
        placeholder: "What did you think of this book?",
        value: text,
        onChange: function(e) { setText(e.target.value); }
      })
    ),
    React.createElement(Button, {
      variant: "primary",
      onClick: handleSubmit
    }, "Submit Review")
  );
}

// ---------- BookModal ----------
function BookModal(props) {
  var book = props.book;

  var _React$useState7 = React.useState([]),
      reviews = _React$useState7[0],
      setReviews = _React$useState7[1];

  React.useEffect(function() {
    if (book) {
      var allReviews = getReviews();
      setReviews(allReviews[book.title] || []);
    }
  }, [book]);

  function handleSubmitReview(review) {
    saveReview(book.title, review);
    var allReviews = getReviews();
    setReviews(allReviews[book.title] || []);
  }

  function handleClose() {
    props.onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  if (!book) return null;

  return React.createElement("div", {
    className: "book-modal-overlay" + (props.isOpen ? " open" : ""),
    id: "bookModal",
    onClick: handleOverlayClick
  },
    React.createElement("div", { className: "book-modal" },
      React.createElement("div", { className: "book-modal-header" },
        React.createElement("div", null,
          React.createElement("h2", { id: "modalTitle" }, book.title),
          React.createElement("p", { id: "modalAuthor" }, book.author)
        ),
        React.createElement("button", {
          className: "book-modal-close",
          onClick: handleClose
        }, "\u00D7")
      ),
      React.createElement("div", { className: "book-modal-body" },
        React.createElement("div", { className: "book-modal-stars", id: "modalStars" }, starsString(book.stars)),
        React.createElement("p", { className: "book-modal-desc", id: "modalDesc" }, book.desc),
        React.createElement("h3", { className: "book-modal-reviews-title" }, "Reviews"),
        React.createElement(ReviewList, { reviews: reviews }),
        React.createElement(ReviewForm, { onSubmit: handleSubmitReview })
      )
    )
  );
}

// ---------- FeatureItem ----------
function FeatureItem(props) {
  return React.createElement("div", { className: "feature-item" },
    React.createElement("div", { className: "feature-icon" }, props.icon),
    React.createElement("h3", null, props.title),
    React.createElement("p", null, props.desc)
  );
}

// ---------- FeaturesSection ----------
function FeaturesSection() {
  return React.createElement("section", { className: "section", style: { background: "#fff" } },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "features" },
        FEATURES.map(function(f, i) {
          return React.createElement(FeatureItem, {
            key: i,
            icon: f.icon,
            title: f.title,
            desc: f.desc
          });
        })
      )
    )
  );
}

// ---------- EventCard ----------
function EventCard(props) {
  var event = props.event;

  // Format date for display (e.g., "March 15, 2026")
  function formatDate(dateStr) {
    var date = new Date(dateStr + "T00:00:00Z");
    var options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return React.createElement("div", { className: "event-card" },
    React.createElement("div", { className: "event-icon" }, event.icon || "📅"),
    React.createElement("div", { className: "event-details" },
      React.createElement("h3", { className: "event-title" }, event.title || "Untitled Event"),
      React.createElement("p", { className: "event-type" }, event.type || "Event"),
      React.createElement("div", { className: "event-meta" },
        React.createElement("time", { dateTime: event.date, className: "event-date" }, formatDate(event.date || "")),
        React.createElement("span", { className: "event-time" }, event.time || "Time TBD")
      ),
      React.createElement("p", { className: "event-location" },
        event.isVirtual ? "🌐 " : "📍 ",
        event.location || "Location TBD"
      ),
      React.createElement("p", { className: "event-description" }, event.description || "")
    )
  );
}

// ---------- EventFilterButtons ----------
function EventFilterButtons(props) {
  // Derive filter list from data so new event types appear automatically
  var seenTypes = [];
  var dynamicFilters = [{ value: "all", label: "All Events" }];
  props.events.forEach(function(event) {
    if (event.type && seenTypes.indexOf(event.type) === -1) {
      seenTypes.push(event.type);
      // Build a readable label from the type slug and use the event's own icon
      var readableLabel = event.type
        .split("-")
        .map(function(word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
      dynamicFilters.push({ value: event.type, label: event.icon + " " + readableLabel });
    }
  });

  return React.createElement("div", { className: "shop-controls" },
    dynamicFilters.map(function(f) {
      return React.createElement("button", {
        key: f.value,
        className: "filter-btn" + (props.activeFilter === f.value ? " active" : ""),
        onClick: function() { props.onFilterChange(f.value); }
      }, f.label);
    })
  );
}

// ---------- UpcomingEventsSection ----------
function UpcomingEventsSection() {
  var _React$useState = React.useState("all"),
      activeFilter = _React$useState[0],
      setActiveFilter = _React$useState[1];

  // Guard against missing/invalid data
  var events = Array.isArray(UPCOMING_EVENTS) ? UPCOMING_EVENTS : [];

  var filteredEvents = events.filter(function(event) {
    return activeFilter === "all" || event.type === activeFilter;
  });

  return React.createElement("section", { className: "section section-events" },
    React.createElement("div", { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Upcoming Events"),
      React.createElement("p", { className: "section-subtitle" }, "Join us for literary events and author conversations"),
      React.createElement(EventFilterButtons, {
        events: events,
        activeFilter: activeFilter,
        onFilterChange: setActiveFilter
      }),
      filteredEvents.length > 0
        ? React.createElement("div", { className: "events-grid" },
            filteredEvents.map(function(event) {
              return React.createElement(EventCard, {
                key: event.id,
                event: event
              });
            })
          )
        : React.createElement("p", { className: "no-events" }, "No upcoming events in this category. Check back soon!")
    )
  );
}

// ---------- ValueCard ----------
function ValueCard(props) {
  return React.createElement("div", { className: "value-card" },
    React.createElement("div", { className: "icon" }, props.icon),
    React.createElement("h3", null, props.title),
    React.createElement("p", null, props.desc)
  );
}

// ---------- ValuesSection ----------
function ValuesSection() {
  return React.createElement("section", { className: "section", style: { background: "#fff" } },
    React.createElement("div", { className: "container" },
      React.createElement("h2", { className: "section-title" }, "What We Stand For"),
      React.createElement("p", { className: "section-subtitle" }, "The values behind every book we carry"),
      React.createElement("div", { className: "values-grid" },
        VALUES.map(function(v, i) {
          return React.createElement(ValueCard, {
            key: i,
            icon: v.icon,
            title: v.title,
            desc: v.desc
          });
        })
      )
    )
  );
}

// ---------- TeamCard ----------
function TeamCard(props) {
  var member = props.member;

  function handleClick() {
    if (props.onClick) props.onClick(member);
  }

  return React.createElement("div", { className: "book-card", "data-bio": member.bio },
    React.createElement("div", { className: "thumb", style: { fontSize: "4rem" } }, member.icon),
    React.createElement("div", { className: "info" },
      React.createElement("h3", { onClick: handleClick, style: { cursor: "pointer" } }, member.name),
      React.createElement("p", { className: "author" }, member.role)
    )
  );
}

// ---------- TeamModal ----------
function TeamModal(props) {
  var member = props.member;

  function handleClose() {
    props.onClose();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  if (!member) return null;

  return React.createElement("div", {
    className: "book-modal-overlay" + (props.isOpen ? " open" : ""),
    id: "teamModal",
    onClick: handleOverlayClick
  },
    React.createElement("div", { className: "book-modal" },
      React.createElement("div", { className: "book-modal-header" },
        React.createElement("div", null,
          React.createElement("h2", { id: "teamModalName" }, member.name),
          React.createElement("p", { id: "teamModalRole" }, member.role)
        ),
        React.createElement("button", {
          className: "book-modal-close",
          onClick: handleClose
        }, "\u00D7")
      ),
      React.createElement("div", { className: "book-modal-body" },
        React.createElement("p", { className: "book-modal-desc", id: "teamModalBio" }, member.bio)
      )
    )
  );
}

// ---------- TeamSection ----------
function TeamSection(props) {
  return React.createElement("section", { className: "section" },
    React.createElement("div", { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Meet the Team"),
      React.createElement("p", { className: "section-subtitle" }, "The people who make Quill & Ink possible"),
      React.createElement("div", { className: "book-grid" },
        TEAM_MEMBERS.map(function(m, i) {
          return React.createElement(TeamCard, {
            key: i,
            member: m,
            onClick: props.onMemberClick
          });
        })
      )
    )
  );
}

// ---------- AboutIntro ----------
function AboutIntro() {
  return React.createElement("section", { className: "section section-teal" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "about-content" },
        React.createElement("div", { className: "about-image" },
          React.createElement("img", { src: "about-story.png", alt: "Quill and Ink founders at a farmers market book stand" })
        ),
        React.createElement("div", { className: "about-text" },
          React.createElement("h2", null, "Our Story"),
          React.createElement("p", null, "Quill & Ink was founded in 2018 by a small group of book lovers who believed that every reader deserves access to thoughtfully curated literature \u2014 without the overwhelming noise of massive online retailers."),
          React.createElement("p", null, "What started as a weekend pop-up at a local farmer's market has grown into a trusted online destination for readers across the country. We remain committed to the same principle that guided us from day one: quality over quantity."),
          React.createElement("a", { href: "shop.html", className: "btn btn-secondary" }, "Explore Our Collection")
        )
      )
    )
  );
}

// ---------- ContactInfoList ----------
function ContactInfoList() {
  return React.createElement("ul", { className: "contact-info-list" },
    CONTACT_INFO.map(function(item, i) {
      return React.createElement("li", { key: i },
        React.createElement("span", { className: "contact-icon" }, item.icon),
        React.createElement("div", null,
          React.createElement("strong", null, item.label),
          item.value.split("\n").map(function(line, j) {
            return React.createElement(React.Fragment, { key: j },
              line,
              j < item.value.split("\n").length - 1 && React.createElement("br", null)
            );
          })
        )
      );
    })
  );
}

// ---------- ContactForm ----------
function ContactForm() {
  var _React$useState8 = React.useState({ name: "", email: "", subject: "", message: "" }),
      form = _React$useState8[0],
      setForm = _React$useState8[1];

  function handleChange(field) {
    return function(e) {
      var newForm = Object.assign({}, form);
      newForm[field] = e.target.value;
      setForm(newForm);
    };
  }

  function handleSubmit() {
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return React.createElement("div", { className: "form-section contact-form" },
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "contactName" }, "Your Name"),
      React.createElement("input", {
        type: "text",
        id: "contactName",
        placeholder: "Jane Doe",
        value: form.name,
        onChange: handleChange("name")
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "contactEmail" }, "Email Address"),
      React.createElement("input", {
        type: "email",
        id: "contactEmail",
        placeholder: "jane@example.com",
        value: form.email,
        onChange: handleChange("email")
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "contactSubject" }, "Subject"),
      React.createElement("input", {
        type: "text",
        id: "contactSubject",
        placeholder: "Order inquiry, recommendation, etc.",
        value: form.subject,
        onChange: handleChange("subject")
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "contactMessage" }, "Message"),
      React.createElement("textarea", {
        id: "contactMessage",
        placeholder: "How can we help?",
        value: form.message,
        onChange: handleChange("message")
      })
    ),
    React.createElement(Button, { variant: "primary", onClick: handleSubmit }, "Send Message")
  );
}

// ---------- ContactSection ----------
function ContactSection() {
  return React.createElement("section", { className: "section", style: { background: "#fff" } },
    React.createElement("div", { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Contact Us"),
      React.createElement("p", { className: "section-subtitle" }, "We'd love to hear from you"),
      React.createElement("div", { className: "contact-grid" },
        React.createElement("div", null, React.createElement(ContactInfoList, null)),
        React.createElement(ContactForm, null)
      )
    )
  );
}

// ---------- CartTable ----------
function CartTable(props) {
  var items = props.items;

  if (items.length === 0) {
    return React.createElement("div", { className: "cart-empty", id: "cartEmpty" },
      React.createElement("p", null, "Your cart is empty."),
      React.createElement("a", { href: "shop.html", className: "btn btn-secondary" }, "Browse the Shop")
    );
  }

  return React.createElement("table", { className: "cart-table", id: "cartTable" },
    React.createElement("thead", null,
      React.createElement("tr", null,
        React.createElement("th", null, "Book"),
        React.createElement("th", null, "Price"),
        React.createElement("th", null, "Qty"),
        React.createElement("th", null, "Subtotal"),
        React.createElement("th", null)
      )
    ),
    React.createElement("tbody", { id: "cartBody" },
      items.map(function(item) {
        var sub = item.price * item.qty;
        return React.createElement("tr", { key: item.title },
          React.createElement("td", null,
            React.createElement("strong", null, item.title),
            React.createElement("br", null),
            React.createElement("small", null, item.author)
          ),
          React.createElement("td", null, "$" + item.price.toFixed(2)),
          React.createElement("td", null,
            React.createElement("div", { className: "qty-controls" },
              React.createElement("button", {
                className: "qty-btn",
                onClick: function() { props.onUpdateQty(item.title, item.qty - 1); }
              }, "\u2212"),
              React.createElement("span", { className: "qty-value" }, item.qty),
              React.createElement("button", {
                className: "qty-btn",
                onClick: function() { props.onUpdateQty(item.title, item.qty + 1); }
              }, "+")
            )
          ),
          React.createElement("td", null, "$" + sub.toFixed(2)),
          React.createElement("td", null,
            React.createElement("button", {
              className: "remove-btn",
              onClick: function() { props.onRemove(item.title); }
            }, "\u00D7")
          )
        );
      })
    )
  );
}

// ---------- ShippingForm ----------
function ShippingForm(props) {
  var form = props.form;
  var onChange = props.onChange;

  return React.createElement("div", { className: "form-section" },
    React.createElement("h2", null, "Shipping Information"),
    React.createElement("div", { className: "form-row" },
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "firstName" }, "First Name"),
        React.createElement("input", {
          type: "text",
          id: "firstName",
          placeholder: "Jane",
          value: form.firstName,
          onChange: function(e) { onChange("firstName", e.target.value); }
        })
      ),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "lastName" }, "Last Name"),
        React.createElement("input", {
          type: "text",
          id: "lastName",
          placeholder: "Doe",
          value: form.lastName,
          onChange: function(e) { onChange("lastName", e.target.value); }
        })
      )
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "email" }, "Email Address"),
      React.createElement("input", {
        type: "email",
        id: "email",
        placeholder: "jane@example.com",
        value: form.email,
        onChange: function(e) { onChange("email", e.target.value); }
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "address" }, "Street Address"),
      React.createElement("input", {
        type: "text",
        id: "address",
        placeholder: "123 Main Street",
        value: form.address,
        onChange: function(e) { onChange("address", e.target.value); }
      })
    ),
    React.createElement("div", { className: "form-row" },
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "city" }, "City"),
        React.createElement("input", {
          type: "text",
          id: "city",
          placeholder: "Springfield",
          value: form.city,
          onChange: function(e) { onChange("city", e.target.value); }
        })
      ),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "zip" }, "Postal Code"),
        React.createElement("input", {
          type: "text",
          id: "zip",
          placeholder: "62701",
          value: form.zip,
          onChange: function(e) { onChange("zip", e.target.value); }
        })
      )
    )
  );
}

// ---------- PaymentForm ----------
function PaymentForm(props) {
  var form = props.form;
  var onChange = props.onChange;

  return React.createElement("div", { className: "form-section", style: { marginTop: "1.5rem" } },
    React.createElement("h2", null, "Payment Details"),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "cardName" }, "Name on Card"),
      React.createElement("input", {
        type: "text",
        id: "cardName",
        placeholder: "Jane Doe",
        value: form.cardName,
        onChange: function(e) { onChange("cardName", e.target.value); }
      })
    ),
    React.createElement("div", { className: "form-group" },
      React.createElement("label", { htmlFor: "cardNumber" }, "Card Number"),
      React.createElement("input", {
        type: "text",
        id: "cardNumber",
        placeholder: "1234 5678 9012 3456",
        value: form.cardNumber,
        onChange: function(e) { onChange("cardNumber", e.target.value); }
      })
    ),
    React.createElement("div", { className: "form-row" },
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "expiry" }, "Expiry Date"),
        React.createElement("input", {
          type: "text",
          id: "expiry",
          placeholder: "MM / YY",
          value: form.expiry,
          onChange: function(e) { onChange("expiry", e.target.value); }
        })
      ),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "cvv" }, "CVV"),
        React.createElement("input", {
          type: "text",
          id: "cvv",
          placeholder: "123",
          value: form.cvv,
          onChange: function(e) { onChange("cvv", e.target.value); }
        })
      )
    )
  );
}

// ---------- OrderSummary ----------
function OrderSummary(props) {
  var items = props.items;
  var subtotal = items.reduce(function(sum, item) {
    return sum + item.price * item.qty;
  }, 0);
  var shipping = subtotal >= 35 ? 0 : 4.99;
  var total = subtotal + shipping;

  return React.createElement("div", { className: "order-summary", id: "orderSummary" },
    React.createElement("h2", null, "Order Summary"),
    React.createElement("div", { id: "summaryItems" },
      items.map(function(item) {
        var sub = item.price * item.qty;
        return React.createElement("div", { className: "summary-item", key: item.title },
          React.createElement("span", null, item.title + " \u00D7 " + item.qty),
          React.createElement("span", null, "$" + sub.toFixed(2))
        );
      })
    ),
    React.createElement("div", { className: "summary-item" },
      React.createElement("span", null, "Shipping"),
      React.createElement("span", { id: "shippingCost" }, shipping === 0 ? "Free" : "$4.99")
    ),
    React.createElement("div", { className: "summary-item total" },
      React.createElement("span", null, "Total"),
      React.createElement("span", { id: "summaryTotal" }, "$" + total.toFixed(2))
    ),
    React.createElement(Button, {
      variant: "primary",
      onClick: props.onPlaceOrder,
      style: { width: "100%", marginTop: "1.5rem", textAlign: "center", fontSize: "1rem" }
    }, "Place Order")
  );
}

// ==================== PAGE COMPONENTS ====================

// ---------- HomePage ----------
function HomePage() {
  var _React$useState9 = React.useState(false),
      modalOpen = _React$useState9[0],
      setModalOpen = _React$useState9[1];

  var _React$useState10 = React.useState(null),
      selectedBook = _React$useState10[0],
      setSelectedBook = _React$useState10[1];

  function handleTitleClick(book) {
    setSelectedBook(book);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedBook(null);
  }

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar, { activePage: "home" }),
    React.createElement(Hero, {
      variant: "teal",
      titlePrefix: "Welcome to Quill ",
      titleHighlight: "&",
      titleSuffix: " Ink",
      subtitle: "Curated books for curious minds. Discover your next favourite read from our handpicked collection.",
      ctaText: "Browse the Shop",
      ctaHref: "shop.html"
    }),
    React.createElement("section", { className: "section" },
      React.createElement("div", { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Featured Books"),
        React.createElement("p", { className: "section-subtitle" }, "Staff picks we think you'll love"),
        React.createElement(BookGrid, {
          books: FEATURED_BOOKS,
          onTitleClick: handleTitleClick
        })
      )
    ),
    React.createElement(FeaturesSection, null),
    React.createElement(UpcomingEventsSection, null),
    React.createElement(BookModal, {
      isOpen: modalOpen,
      book: selectedBook,
      onClose: handleCloseModal
    }),
    React.createElement(Footer, null)
  );
}

// ---------- ShopPage ----------
function ShopPage() {
  var _React$useState11 = React.useState("all"),
      filter = _React$useState11[0],
      setFilter = _React$useState11[1];

  var _React$useState12 = React.useState(false),
      modalOpen = _React$useState12[0],
      setModalOpen = _React$useState12[1];

  var _React$useState13 = React.useState(null),
      selectedBook = _React$useState13[0],
      setSelectedBook = _React$useState13[1];

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleTitleClick(book) {
    setSelectedBook(book);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedBook(null);
  }

  var visibleCount = ALL_BOOKS.filter(function(b) {
    return filter === "all" || b.category === filter;
  }).length;

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar, { activePage: "shop" }),
    React.createElement("section", { className: "hero", style: { padding: "3rem 2rem", background: "#204854" } },
      React.createElement("h1", null, "Our ", React.createElement("span", null, "Collection")),
      React.createElement("p", null, "Browse our full catalogue of handpicked titles across every genre.")
    ),
    React.createElement("section", { className: "section" },
      React.createElement("div", { className: "container" },
        React.createElement(FilterButtons, {
          activeFilter: filter,
          onFilterChange: handleFilterChange
        }),
        React.createElement(BookGrid, {
          books: ALL_BOOKS,
          filter: filter,
          onTitleClick: handleTitleClick,
          showNoResults: true,
          noResultsVisible: visibleCount === 0
        })
      )
    ),
    React.createElement(BookModal, {
      isOpen: modalOpen,
      book: selectedBook,
      onClose: handleCloseModal
    }),
    React.createElement(Footer, null)
  );
}

// ---------- AboutPage ----------
function AboutPage() {
  var _React$useState14 = React.useState(false),
      modalOpen = _React$useState14[0],
      setModalOpen = _React$useState14[1];

  var _React$useState15 = React.useState(null),
      selectedMember = _React$useState15[0],
      setSelectedMember = _React$useState15[1];

  function handleMemberClick(member) {
    setSelectedMember(member);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedMember(null);
  }

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar, { activePage: "about" }),
    React.createElement(AboutIntro, null),
    React.createElement(ValuesSection, null),
    React.createElement(TeamSection, { onMemberClick: handleMemberClick }),
    React.createElement(ContactSection, null),
    React.createElement(TeamModal, {
      isOpen: modalOpen,
      member: selectedMember,
      onClose: handleCloseModal
    }),
    React.createElement(Footer, null)
  );
}

// ---------- CheckoutPage ----------
function CheckoutPage() {
  var _React$useState16 = React.useState(Cart.getItems()),
      items = _React$useState16[0],
      setItems = _React$useState16[1];

  var _React$useState17 = React.useState({
        firstName: "", lastName: "", email: "", address: "", city: "", zip: "",
        cardName: "", cardNumber: "", expiry: "", cvv: ""
      }),
      form = _React$useState17[0],
      setForm = _React$useState17[1];

  React.useEffect(function() {
    function handleCartUpdate() {
      setItems(Cart.getItems());
    }
    window.addEventListener("cartUpdated", handleCartUpdate);
    return function() {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  function handleFormChange(field, value) {
    var newForm = Object.assign({}, form);
    newForm[field] = value;
    setForm(newForm);
  }

  function handleUpdateQty(title, newQty) {
    Cart.updateQty(title, newQty);
    setItems(Cart.getItems());
  }

  function handleRemove(title) {
    Cart.removeItem(title);
    setItems(Cart.getItems());
  }

  function handlePlaceOrder() {
    if (items.length === 0) return;
    Cart.clearCart();
    setItems([]);
    alert("Order placed! Thank you for shopping with Quill & Ink.");
  }

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar, { activePage: "cart" }),
    React.createElement("section", { className: "section" },
      React.createElement("div", { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Your Cart"),
        React.createElement("p", { className: "section-subtitle" }, "Review and edit your items before checking out"),
        React.createElement("div", { className: "cart-table-wrapper form-section", id: "cartSection" },
          React.createElement(CartTable, {
            items: items,
            onUpdateQty: handleUpdateQty,
            onRemove: handleRemove
          })
        ),
        items.length > 0 && React.createElement("div", { className: "checkout-layout", id: "checkoutArea", style: { marginTop: "2.5rem" } },
          React.createElement("div", null,
            React.createElement(ShippingForm, { form: form, onChange: handleFormChange }),
            React.createElement(PaymentForm, { form: form, onChange: handleFormChange })
          ),
          React.createElement(OrderSummary, { items: items, onPlaceOrder: handlePlaceOrder })
        )
      )
    ),
    React.createElement(Footer, null)
  );
}
