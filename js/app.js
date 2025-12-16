// js/app.js — Final Project Ready Version with 2 APIs

document.addEventListener("DOMContentLoaded", () => {
  const drinkList = document.querySelector(".drink-list");
  const galleryGrid = document.querySelector(".gallery-grid");

  // Create Load Drinks button
  const loadBtn = document.createElement("button");
  loadBtn.textContent = "Load Drinks";
  drinkList.parentNode.insertBefore(loadBtn, drinkList);

  // LOCAL STORAGE (Cart)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // EVENT LISTENER
  loadBtn.addEventListener("click", loadDrinks);

  // API #1 — TheCocktailDB
  async function loadDrinks() {
    drinkList.innerHTML = "<p>Loading drinks...</p>";

    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=soda"
      );
      const data = await response.json();

      drinkList.innerHTML = "";

      data.drinks.slice(0, 4).forEach(drink => {
        const card = document.createElement("article");
        card.className = "drink";

        card.innerHTML = `
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
          <h3>${drink.strDrink}</h3>
          <button>Add to Cart</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
          cart.push(drink.strDrink);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${drink.strDrink} added to cart`);
        });

        drinkList.appendChild(card);
      });
    } catch (error) {
      drinkList.innerHTML = "<p>Failed to load drinks.</p>";
      console.error(error);
    }
  }

  // API #2 — Unsplash (Random Soda Images)
  async function loadGallery() {
    galleryGrid.innerHTML = "<p>Loading gallery...</p>";
    const accessKey = "YOUR_UNSPLASH_ACCESS_KEY"; // replace with your key

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=soda&per_page=4&client_id=${accessKey}`
      );
      const data = await response.json();

      galleryGrid.innerHTML = "";

      data.results.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description || "Soda image";
        galleryGrid.appendChild(img);
      });
    } catch (error) {
      galleryGrid.innerHTML = "<p>Failed to load gallery.</p>";
      console.error(error);
    }
  }

  // Load gallery automatically
  loadGallery();
});
