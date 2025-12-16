import { drinks } from './data.js';

const drinkList = document.querySelector('.drink-list');
const galleryGrid = document.querySelector('.gallery-grid');

// Generate drinks menu dynamically
drinks.forEach(drink => {
  const div = document.createElement('article');
  div.className = 'drink';
  div.innerHTML = `
    <img src="${drink.image}" alt="${drink.name}" width="400" height="300">
    <h3>${drink.name}</h3>
    <p>${drink.desc}</p>
  `;
  drinkList.appendChild(div);
});

// Populate gallery with the same drink images
drinks.forEach(drink => {
  const img = document.createElement('img');
  img.src = drink.image;
  img.alt = drink.name;
  galleryGrid.appendChild(img);
});

// Example of integrating a third-party API (Unsplash random drink image)
async function loadRandomDrinkImage() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?query=soda&client_id=YOUR_UNSPLASH_ACCESS_KEY');
    const data = await response.json();
    const img = document.createElement('img');
    img.src = data.urls.small;
    img.alt = data.alt_description || "Random Soda Image";
    galleryGrid.appendChild(img);
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
  }
}

// Load one random soda image dynamically
loadRandomDrinkImage();
