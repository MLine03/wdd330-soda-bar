// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cartCount");
  const drinks = document.querySelectorAll(".drink");

  // Initialize cart count from localStorage
  let count = parseInt(localStorage.getItem("cartCount")) || 0;
  cartCount.textContent = count;

  drinks.forEach(drink => {
    // Create "Add to Cart" button
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart 🛒";
    addButton.classList.add("add-btn");
    drink.appendChild(addButton);

    // On click, increment cart
    addButton.addEventListener("click", () => {
      count++;
      cartCount.textContent = count;
      localStorage.setItem("cartCount", count);
      alert(`${drink.querySelector("h3").textContent} added to cart!`);
    });
  });
});
