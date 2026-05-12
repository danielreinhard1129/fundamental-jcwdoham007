"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
function test() {
    for (let i = 0; i < 10; i++) {
        console.log("testt");
    } // O(n)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; i++) {
            console.log("testt");
        }
    } // O(n2)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; i++) {
            for (let k = 0; k < 10; i++) {
                console.log("testt");
            }
        }
    } // O(n3)
}
// ========== MAP ==========
const myMap = new Map();
myMap.set("name", "John");
myMap.set("address", "Jakarta");
console.log(myMap.get("address"));
console.log(myMap.get("name"));
console.log(myMap.has("asdasdasda"));
console.log(myMap.has("address"));
myMap.delete("address");
console.log(myMap.has("address"));
// ========== Set -> only unique values ==========
const fruits = ["apple", "mango", "apple", "orange"];
const mySet = new Set(fruits);
console.log(mySet);
console.log(Array.from(mySet));
console.log(mySet.size);
/*
    No 1
    Write a JavaScript function called phoneNumber that takes a single argument input.
    The function is intended to format a phone number. It checks the input to ensure
    it meets certain criteria and then proceeds with formatting. The formatting
    includes replacing the leading "0" with "62" and creating a template in the
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex :
    input = "085211155555"
    output = "(6285)-2111-55555"

    =============================================
    No 2

    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian
    constructor = super, data unik dari buku dan pakaian

    buat class OnlineShop
    constructor = products dan cart (private)
    method :
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/
// No 1
function phoneNumber(input) {
    if (input.length !== 12) {
        return "invalid phone number";
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] < "0" || input[i] > "9") {
            return "invalid phone number";
        }
    }
    input = "62" + input.slice(1);
    let template = "(xxxx)-xxxx-xxxxx";
    const splitInput = input.split(""); // ["6", "2", "8", "1", "2", ...]
    splitInput.forEach((item) => {
        template = template.replace("x", item);
    });
    return template;
}
console.log(phoneNumber("081231231111"));
// No 2
class Product {
    constructor(name, weight, price, stock) {
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
    }
}
class Book extends Product {
    constructor(name, weight, price, stock, author) {
        super(name, weight, price, stock);
        this.author = author;
    }
}
class Pakaian extends Product {
    constructor(name, weight, price, stock, size, color) {
        super(name, weight, price, stock);
        this.size = size;
        this.color = color;
    }
}
class OnlineShop {
    constructor() {
        this.products = [];
        this.carts = [];
    }
    formatPrice(price) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(price);
    }
    addProduct(product) {
        // 1. cek dulu produk nya udah ada di catalog atau belom
        const existingProduct = this.products.find((p) => p.name === product.name);
        // 2. kalo udah ada return produk sudah ada di catalog
        if (existingProduct)
            return "product already exist";
        // 3. kalo belom ada masukin datanya ke property products
        this.products.push(product);
        // 4. return tambah product success
        return "add product success";
    }
    addToCart(product, qty) {
        // 1. cek dulu produk nya udah ada di catalog atau belom
        const existingProduct = this.products.find((p) => p.name === product.name);
        // 2. kalo belom ada return product tidak terdaftar
        if (!existingProduct)
            return "product not found";
        // 3. kalo ada di catalog, cek lagi product nya ada atu tidak di dalam keranjang
        const cartItem = this.carts.find((c) => c.product.name === product.name);
        // 4. kalo misalnya sudah ada dalam carts, cek lagi stok produknya cukup atau tidak dengan qty yang ada
        // 5. kalo cukup kurangin stok dari produknya berdasarkan qty yg dimasukkan
        // 6. kalo stok nya tidak cukup, return stok tidak cukup
        if (cartItem) {
            if (existingProduct.stock >= qty) {
                existingProduct.stock -= qty;
                cartItem.qty += qty;
                return "add to cart success";
            }
            else {
                return "stok tidak cukup";
            }
        }
        else {
            if (existingProduct.stock >= qty) {
                existingProduct.stock -= qty;
                this.carts.push({ qty, product });
                return "add to cart success";
            }
            else {
                return "stok tidak cukup";
            }
        }
    }
    checkout(userMoney, distance) {
        let totalPrice = 0;
        const costPerKm = 2000;
        this.carts.forEach((cart) => {
            totalPrice += cart.product.price * cart.qty;
        });
        const ongkir = distance * costPerKm;
        const total = ongkir + totalPrice;
        if (userMoney < total) {
            return "uang gak cukup";
        }
        this.carts = [];
        return {
            message: "checkout success",
            total: this.formatPrice(total),
            totalPrice: this.formatPrice(totalPrice),
            ongkir: this.formatPrice(ongkir),
            kembalian: this.formatPrice(userMoney - total),
        };
    }
    showCarts() {
        return this.carts;
    }
    showCatalog() {
        return this.products;
    }
}
const buku1 = new Book("cara jago ngoding", 10, 100_000, 10, "budi");
const buku2 = new Book("cara jago typescript", 20, 150_000, 5, "joko");
const baju1 = new Pakaian("baju kaos", 8, 200_000, 20, "XL", "white");
const onlineShop = new OnlineShop();
console.log(onlineShop.addProduct(buku1));
console.log(onlineShop.addProduct(baju1));
console.log(onlineShop.showCatalog());
console.log(onlineShop.addToCart(buku1, 2));
console.log(onlineShop.addToCart(baju1, 2));
console.log(onlineShop.addToCart(baju1, 3));
console.log(onlineShop.showCarts());
console.log(onlineShop.checkout(1_300_000, 5));
// simulasi fetch data ke BE
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Joko");
            }
            else {
                reject("Terjadi kesalahan.");
            }
        }, 2000);
    });
}
fetchData()
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
    console.log("Promise selesai");
});
// menggunakan async await -> lebih simple
async function getDataUser() {
    try {
        const user = await fetchData();
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Promise selesai");
    }
}
getDataUser();
const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
};
getUsers();
// JSON -> javascript object notation
const user = {
    name: "Budi",
    age: 32,
};
const userJSON = JSON.stringify(user);
console.log(userJSON);
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);
// MODULES
console.log((0, test_1.myFunc)());
