const select = document.getElementById("flavorSelect");
const mixList = document.getElementById("mixList");
const totalEl = document.getElementById("total");

let mix = [];
let total = 0;

sodas.forEach(soda => {
  const option = document.createElement("option");
  option.value = soda.id;
  option.textContent = soda.name;
  select.appendChild(option);
});

function addFlavor() {
  const soda = sodas.find(s => s.id === Number(select.value));
  mix.push(soda.name);
  total += soda.price;

  mixList.textContent = "Flavors: " + mix.join(", ");
  totalEl.textContent = total.toFixed(2);
}
