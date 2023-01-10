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

    setCart(cart) {
        this.cart = cart;
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

    getCart() {
        return Object.values(this.cart).map((item) => (item.item));
    }

    getCounter() {
        return Object.values(this.cart).reduce((res, item) => { return res + item.count; }, 0);
    }

    getTotalPriceBySKU(id) {
        return this.getCountBySKU(id) * this.cart[id].item.price;
    }

    getCountBySKU(id) {
        console.log(this.cart);
        return this.cart[id].count;
    }

    getTotalPrice() {
        return Object.values(this.cart).reduce((res, item) => { return res + this.getTotalPriceBySKU(item.item._id); }, 0);
    }
}

export const store = new Store();

