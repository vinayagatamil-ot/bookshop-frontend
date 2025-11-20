
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  container.innerHTML = "";
  const buyButton = document.getElementById("buyBtn");
  const buy = document.getElementById("buy");
  const cartCount = document.getElementById("cc");
  const cartTotal = document.getElementById("ct");


  if (cart.length === 0) {
    container.innerHTML = '<p >Your cart is empty.</p>';
    buyButton.style.display = "none";
    buy.style.height = "350px";
    cartCount.textContent = "0";
    cartTotal.textContent = "₹0";

    return;
  }

  cart.forEach(item => {
    const total = (item.price * item.count).toFixed(2);
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <p>${item.title}</p>
      <p class="quantity">Quantity: ${item.count}</p>
      <p class="price">Rs. ${item.price} × ${item.count} = Rs. ${total}</p><br>
      <button onclick="changeQuantity('${item.title}', -1)">−</button>
      <button onclick="changeQuantity('${item.title}', 1)">+</button>
    `;
    container.appendChild(div);
  });
}

// Update quantity and sync with kids.html
function changeQuantity(title, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let bookCounts = JSON.parse(localStorage.getItem("bookCounts")) || {};

  const item = cart.find(i => i.title === title);
  if (!item) return;

  item.count += delta;
  if (item.count <= 0) {
    cart = cart.filter(i => i.title !== title);
    delete bookCounts[title];
  } else {
    bookCounts[title] = item.count;
  }

  const totalCartCount = Object.values(bookCounts).reduce((sum, c) => sum + c, 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("bookCounts", JSON.stringify(bookCounts));
  localStorage.setItem("totalCartCount", totalCartCount);

  loadCart();
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadCart);
