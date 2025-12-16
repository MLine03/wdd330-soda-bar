// API #1 - TheCocktailDB (JSON)
export async function getDrinks() {
  try {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=soda");
    const data = await res.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Error loading drinks:", error);
    return [];
  }
}

// API #2 - Quotes REST API (JSON)
export async function getQuotes() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return data.content || "Stay fizzy!";
  } catch (error) {
    console.error("Error loading quote:", error);
    return "Stay fizzy!";
  }
}
