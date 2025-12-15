// Get main container
const flavorList = document.getElementById("flavorList");

// Render soda flavors dynamically
function renderFlavors() {
  flavorList.innerHTML = ""; // Clear previous content
  sodas.forEach(soda => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${soda.image}" alt="${soda.name}">
      <h3>${soda.name}</h3>
      <p>$${soda.price.toFixed(2)}</p>
      <button onclick="addToCart('${soda.name}', ${soda.price})">Add to Cart</button>
    `;
    flavorList.appendChild(card);
  });
}

// Cart handling
let cart = [];
const cartCount = document.getElementById("cartCount");

function addToCart(name, price) {
  cart.push({ name, price });
  cartCount.textContent = cart.length;
  console.log(cart);
}

// Initialize
renderFlavors();


function addToCart(id) {
  const soda = sodas.find(s => s.id === id);
  cart.push({ ...soda, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cartCount").innerText = cart.length;
}

renderFlavors();
document.getElementById("cartCount").innerText = cart.length;

