// ======= Soda Bar App JS =======

// DOM Elements
const drinkList = document.querySelector(".drink-list");
const galleryGrid = document.querySelector(".gallery-grid");

// ======= Local Storage for Cart =======
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ======= Load Drinks from API #1 (TheCocktailDB) =======
async function loadDrinks() {
  drinkList.innerHTML = "<p>Loading drinks...</p>";
  try {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=soda");
    const data = await res.json();

    drinkList.innerHTML = "";
    data.drinks.slice(0, 4).forEach(drink => {
      const card = document.createElement("article");
      card.className = "drink";
      card.innerHTML = `
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h3>${drink.strDrink}</h3>
        <p>${drink.strInstructions.substring(0, 50)}...</p>
        <button>Add to Cart</button>
      `;

      // Event + Local Storage
      card.querySelector("button").addEventListener("click", () => {
        cart.push(drink.strDrink);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${drink.strDrink} added to cart`);
      });

      drinkList.appendChild(card);
    });
  } catch (err) {
    drinkList.innerHTML = "<p>Failed to load drinks.</p>";
    console.error(err);
  }
}

// ======= Load Gallery Images from API #2 (Random Dog API for fun images) =======
async function loadGallery() {
  galleryGrid.innerHTML = "<p>Loading gallery...</p>";
  try {
    const urls = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json())
    ]);

    galleryGrid.innerHTML = "";
    urls.forEach(item => {
      const img = document.createElement("img");
      img.src = item.message;
      img.alt = "Random Dog";
      galleryGrid.appendChild(img);
    });
  } catch (err) {
    galleryGrid.innerHTML = "<p>Failed to load gallery.</p>";
    console.error(err);
  }
}

// ======= Initial Load =======
loadDrinks();
loadGallery();

// ======= Optional: Display Cart Count in Header =======
const header = document.querySelector("header h1");
function updateCartCount() {
  header.textContent = `🥤 Soda Bar App (Cart: ${cart.length})`;
}
updateCartCount();

