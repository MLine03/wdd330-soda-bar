export async function getSodaFlavors() {
    return [
        { id: 1, name: "Cherry", price: 1.5, image: "assets/images/cherry.png" },
        { id: 2, name: "Blueberry", price: 1.7, image: "assets/images/blueberry.png" },
        { id: 3, name: "Lemon", price: 1.4, image: "assets/images/lemon.png" }
    ];
}

export async function getPromotions() {
    return [
        { id: 1, description: "Buy 2 get 1 free!", discount: 0.33 },
        { id: 2, description: "10% off on orders over $5", discount: 0.1 }
    ];
}
