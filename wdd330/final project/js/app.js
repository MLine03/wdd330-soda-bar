const flavorList = document.getElementById("flavorList");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderFlavors() {
  flavorList.innerHTML = "";

  sodas.forEach(soda => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${soda.image}" alt="${soda.name}" width="300" height="200" loading="lazy">
      <h3>${soda.name}</h3>
      <p>$${soda.price.toFixed(2)}</p>
      <button onclick="addToCart(${soda.id})">Add to Cart</button>
    `;
    flavorList.appendChild(card);
  });
}

function addToCart(id) {
  const soda = sodas.find(s => s.id === id);
  cart.push({ ...soda, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cartCount").innerText = cart.length;
}

renderFlavors();
document.getElementById("cartCount").innerText = cart.length;

