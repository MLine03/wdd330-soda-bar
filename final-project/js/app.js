const flavorList = document.getElementById('flavorList');
const cartCount = document.getElementById('cartCount');

let cart = []; // Initialize cart

// Display flavors dynamically
function displayFlavors() {
  flavors.forEach((flavor, index) => {
    const card = document.createElement('div');
    card.classList.add('flavor-card');

    card.innerHTML = `
      <img src="${flavor.img}" alt="${flavor.name}">
      <h3>${flavor.name}</h3>
      <p>$${flavor.price.toFixed(2)}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    flavorList.appendChild(card);
  });
}

// Add a flavor to the cart
function addToCart(index) {
  cart.push(flavors[index]);
  updateCartCount();
  alert(`${flavors[index].name} added to cart!`);
}

// Update cart count display
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Initialize
displayFlavors();
updateCartCount();


