import { getSodaFlavors, getPromotions } from './api.js';
import { addToCart } from './cart.js';

export async function displayPromotions() {
    const promos = await getPromotions();
    document.getElementById('promoText').textContent = promos.map(p => p.description).join(' | ');
}

document.addEventListener("DOMContentLoaded", async () => {
    const flavorPanel = document.getElementById('flavorPanel');
    if (!flavorPanel) return;

    const flavors = await getSodaFlavors();
    flavors.forEach(flavor => {
        const card = document.createElement('div');
        card.className = 'soda-card';
        card.draggable = true;
        card.innerHTML = `<img src="${flavor.image}" alt="${flavor.name}" width="100">
                          <h4>${flavor.name}</h4>
                          <p>$${flavor.price.toFixed(2)}</p>`;
        card.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', JSON.stringify(flavor)));
        flavorPanel.appendChild(card);
    });

    const mixingArea = document.getElementById('mixingArea');
    let mix = [];
    mixingArea.addEventListener('dragover', e => e.preventDefault());
    mixingArea.addEventListener('drop', e => {
        const flavor = JSON.parse(e.dataTransfer.getData('text/plain'));
        mix.push(flavor);
        updateSubtotal();
    });

    function updateSubtotal() {
        const subtotal = mix.reduce((acc,f) => acc+f.price, 0);
        document.getElementById('subtotal').textContent = 'Subtotal: $'+subtotal.toFixed(2);
    }

    document.getElementById('addToCart')?.addEventListener('click', () => {
        addToCart(mix);
        mix=[];
        updateSubtotal();
        alert('Added to cart!');
    });
});
