import { makeAutoObservable } from "mobx";

class Store {
    cart = {};
    goods = [];

    constructor() {
        makeAutoObservable(this);
    }

    setGoods(goods) {
        this.goods = goods;
    }

    getGoods() {
        return this.goods;
    }

    getCart() {
        return Object.values(this.cart).map((item) => (item.item));
    }

    getWind() {
        return this.goods.filter((item) => item.category === "wind");
    }

    getPercussion() {
        return this.goods.filter((item) => item.category === "percussion");
    }

    getStringed() {
        return this.goods.filter((item) => item.category === "stringed");
    }

    getKeyboard() {
        return this.goods.filter((item) => item.category === "keyboard");
    }

    getOther() {
        return this.goods.filter((item) => item.category === "other");
    }

    isEmpty() {
        return (this.goods.length === 0) ? true : false;
    }

    getCounter() {
        return Object.values(this.cart).reduce((res, item) => { return res + item.count; }, 0);
    }

    getTotalPriceBySKU(sku) {
        return this.getCountBySKU(sku) * this.cart[sku].item.price;
    }

    getCountBySKU(sku) {
        return this.cart[sku].count;
    }

    getTotalPrice() {
        return Object.values(this.cart).reduce((res, item) => { return res + this.getTotalPriceBySKU(item.item.sku); }, 0);
    }
}

export const store = new Store();

