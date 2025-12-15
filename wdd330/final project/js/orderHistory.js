export function displayOrderDetails() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder')) || [];
    const container = document.getElementById('orderDetails');
    container.innerHTML = lastOrder.map(item=>`<div>${item.name} - $${item.price.toFixed(2)}</div>`).join('');
}
