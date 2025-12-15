const cart = JSON.parse(localStorage.getItem("cart")) || [];
const list = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
  list.appendChild(li);
  total += item.price;
});

document.getElementById("cartTotal").textContent = total.toFixed(2);
