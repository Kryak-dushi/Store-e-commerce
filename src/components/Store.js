import { makeAutoObservable } from "mobx";

const headphones = [
    {
        sku: 1,
        img: "./assets/trumpet.png",
        title: "Труба",
        price: 12900,
        priceBeforeDiscount: 13500,
        rate: 4.7,
        category: "wind",
    },
    {
        sku: 2,
        img: "./assets/handpan.png",
        title: "Хэндпан",
        price: 8500,
        rate: 4.9,
        category: "percussion",
    },
    {
        sku: 3,
        img: "./assets/drum.png",
        title: "Барабан",
        price: 6800,
        priceBeforeDiscount: 9100,
        rate: 4.5,
        category: "percussion",
    },
    {
        sku: 4,
        img: "./assets/saxophone.png",
        title: "Саксофон",
        price: 18700,
        rate: 4.7,
        category: "wind",
    },
    {
        sku: 5,
        img: "./assets/trombone.png",
        title: "Тромбон",
        price: 13000,
        rate: 4.3,
        category: "wind",
    },
    {
        sku: 6,
        img: "./assets/jembe.png",
        title: "Джембе",
        price: 14600,
        rate: 3.6,
        category: "percussion",
    }
];

class Store {
    cart = {};

    constructor() {
        makeAutoObservable(this);
    }

    getCart() {
        return Object.values(this.cart).map((item) => (item.item));
    }

    getWind() {
        return headphones.filter((item) => item.category==="wind");
    }

    getPercussion() {
        return headphones.filter((item) => item.category==="percussion");
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

