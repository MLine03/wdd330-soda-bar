// app.js — Final Project Rubric Requirements

const drinkList = document.getElementById("drinkList");
const loadBtn = document.getElementById("loadDrinks");

// LOCAL STORAGE (REQUIRED)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// EVENT LISTENER (REQUIRED)
loadBtn.addEventListener("click", loadDrinks);

// API #1 — TheCocktailDB (JSON)
async function loadDrinks() {
  drinkList.innerHTML = "<p>Loading drinks...</p>";

  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=soda"
    );

    const data = await response.json(); // JSON processing (REQUIRED)
    drinkList.innerHTML = "";

    data.drinks.slice(0, 4).forEach(async (drink) => {
      const card = document.createElement("article");
      card.className = "drink";

      // API #2 — Giphy for fun soda GIF
      const gifUrl = await fetchGif(drink.strDrink);

      card.innerHTML = `
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h3>${drink.strDrink}</h3>
        ${gifUrl ? `<img src="${gifUrl}" alt="${drink.strDrink} GIF" class="drink-gif">` : ''}
        <button>Add to Cart</button>
      `;

      // EVENT + LOCAL STORAGE
      card.querySelector("button").addEventListener("click", () => {
        cart.push({
          name: drink.strDrink,
          image: drink.strDrinkThumb
        });
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

// API #2 — Giphy
async function fetchGif(drinkName) {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${drinkName}&limit=1`
    );
    const data = await res.json();
    return data.data[0]?.images.fixed_height.url || "";
  } catch {
    return "";
  }
}
