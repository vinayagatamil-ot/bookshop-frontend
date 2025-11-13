// Add to Cart + Update Navbar (Fully Working)
document.addEventListener("DOMContentLoaded", function () {
  const cartCountElement = document.querySelector(".cart-count");
  const totalPriceElement = document.querySelector(".cart-total");
  const addCartButtons = document.querySelectorAll(".add-cart");

  // Load cart and counts from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let bookCounts = JSON.parse(localStorage.getItem("bookCounts")) || {};

  // --- Utility functions ---

  // Calculate total count
  function getTotalCount() {
    return Object.values(bookCounts).reduce((sum, c) => sum + c, 0);
  }

  // Calculate total price
  function getTotalPrice() {
    return cart.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  }

  // Update navbar display + save storage
  function updateCartDisplay() {
    cartCountElement.textContent = getTotalCount();
    totalPriceElement.textContent = `Rs.${getTotalPrice()}`;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("bookCounts", JSON.stringify(bookCounts));
    localStorage.setItem("totalCartCount", getTotalCount());
  }

  // --- Restore button states ---
  addCartButtons.forEach(button => {
    const title = button.getAttribute("data-title");
    if (bookCounts[title]) {
      button.textContent = `Added (${bookCounts[title]})`;
      button.style.backgroundColor = "green";
      button.style.color = "white";
    }
  });

  // --- Add to Cart Logic ---
  addCartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const title = button.getAttribute("data-title");
      const img = button.getAttribute("data-img");
      const price = parseFloat(button.getAttribute("data-price")) || 0;

      // Check if already in cart
      const existing = cart.find(item => item.title === title);

      if (existing) {
          alert(`${title} added to cart!`);
        existing.count = (existing.count || 1) + 1;
        bookCounts[title] = existing.count;
      } else {
        cart.push({ title, img, price, count: 1 });
        bookCounts[title] = 1;
      }

      // Update button state
      button.textContent = `Added (${bookCounts[title]})`;
      button.style.backgroundColor = "green";
      button.style.color = "white";

      updateCartDisplay();
    });
  });

  // --- Initialize Navbar Display on Page Load ---
  updateCartDisplay();
});

// --- Make book cards clickable except Add Cart button ---
// function goToView(event) {
//   if (!event.target.classList.contains("add-cart")) {
//     window.location.href = "view.html";
//   }
// }
