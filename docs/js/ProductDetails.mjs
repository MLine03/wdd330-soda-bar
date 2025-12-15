// Sample product data
const products = [
  {
    name: "Marmot Ajax Tent",
    description: "3-person, 3-season tent in Pale Pumpkin",
    price: "$299",
    image: "/images/marmot-ajax-tent-3-person-3-season.webp"
  },
  {
    name: "Cedar Ridge Rimrock Tent",
    description: "2-person, 3-season tent in Rust",
    price: "$199",
    image: "/images/cedar-ridge-rimrock-tent-2-person-3-season.webp"
  },
  {
    name: "The North Face Talus Tent",
    description: "4-person, 3-season tent in Gold",
    price: "$349",
    image: "/images/the-north-face-talus-tent-4-person-3-season.webp"
  },
  {
    name: "The North Face Alpine Guide Tent",
    description: "3-person, 4-season tent in Grey",
    price: "$399",
    image: "/images/the-north-face-alpine-guide-tent-3-person-4-season.webp"
  }
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.description}" width="230">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <button aria-label="Add ${product.name} to cart">Add to Cart</button>
    `;
    
    productList.appendChild(productCard);
  });
}

// Initialize
renderProducts();
