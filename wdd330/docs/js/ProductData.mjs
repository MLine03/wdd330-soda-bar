f// ProductData.mjs
export default class ProductData {
    constructor(category) {
        this.category = category;
        this.path = `../json/${category}.json`;
    }

    async getData() {
        const response = await fetch(this.path);
        return await response.json();
    }

    async findProductById(id) {
        const products = await this.getData();
        return products.find(item => item.id === id);
    }
}
