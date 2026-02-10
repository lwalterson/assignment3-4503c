/* ===== Quill & Ink — Cart (localStorage) ===== */

var Cart = (function () {
  var STORAGE_KEY = "quillAndInkCart";

  function getItems() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function addItem(title, author, price) {
    var items = getItems();
    var existing = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].title === title) {
        existing = items[i];
        break;
      }
    }
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ title: title, author: author, price: price, qty: 1 });
    }
    save(items);
    updateBadge();
  }

  function removeItem(title) {
    var items = getItems().filter(function (item) {
      return item.title !== title;
    });
    save(items);
    updateBadge();
  }

  function updateQty(title, newQty) {
    var items = getItems();
    for (var i = 0; i < items.length; i++) {
      if (items[i].title === title) {
        if (newQty <= 0) {
          items.splice(i, 1);
        } else {
          items[i].qty = newQty;
        }
        break;
      }
    }
    save(items);
    updateBadge();
  }

  function clearCart() {
    localStorage.removeItem(STORAGE_KEY);
    updateBadge();
  }

  function totalCount() {
    return getItems().reduce(function (sum, item) {
      return sum + item.qty;
    }, 0);
  }

  function totalPrice() {
    return getItems().reduce(function (sum, item) {
      return sum + item.price * item.qty;
    }, 0);
  }

  /* Update every .cart-count badge on the page */
  function updateBadge() {
    var count = totalCount();
    var badges = document.querySelectorAll(".cart-count");
    for (var i = 0; i < badges.length; i++) {
      badges[i].textContent = count;
      badges[i].style.display = count > 0 ? "inline-flex" : "none";
    }
    // Dispatch custom event for React components
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  }

  /* Wire up all Add-to-Cart buttons on the current page */
  function initAddButtons() {
    document.querySelectorAll(".add-to-cart-btn[data-title]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var title = btn.getAttribute("data-title");
        var author = btn.getAttribute("data-author");
        var price = parseFloat(btn.getAttribute("data-price"));
        addItem(title, author, price);

        /* Brief visual feedback */
        var original = btn.textContent;
        btn.textContent = "Added!";
        btn.classList.add("btn-added");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("btn-added");
        }, 1000);
      });
    });
  }

  /* Run on every page load */
  function init() {
    updateBadge();
    initAddButtons();
  }

  return {
    getItems: getItems,
    addItem: addItem,
    removeItem: removeItem,
    updateQty: updateQty,
    clearCart: clearCart,
    totalCount: totalCount,
    totalPrice: totalPrice,
    updateBadge: updateBadge,
    init: init
  };
})();

document.addEventListener("DOMContentLoaded", Cart.init);
