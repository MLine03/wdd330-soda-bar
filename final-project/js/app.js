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

    data.drinks.slice(0, 4).forEach(drink => {
      const card = document.createElement("article");
      card.className = "drink";

      card.innerHTML = `
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h3>${drink.strDrink}</h3>
        <button>Add to Cart</button>
      `;

      // EVENT + LOCAL STORAGE
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
