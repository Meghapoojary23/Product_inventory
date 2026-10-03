"use strict";
// ==========================================
// PART A - TYPESCRIPT BASICS
// ==========================================
// ---------- 1. Basic Types & Variables ----------
let productName = "Laptop";
let price = 50000;
let inStock = true;
let tags = ["Electronics", "Computer", "Laptop"];
let productId = 101;
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("In Stock:", inStock);
console.log("Tags:", tags);
console.log("Product ID:", productId);
// ---------- 2. Functions ----------
// Function with typed parameters and return type
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log("Price after 10% discount:", calculateDiscount(1000));
console.log("Price after 20% discount:", calculateDiscount(1000, 20));
// ---------- 3. map() Function ----------
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => {
        return price - (price * discountRate / 100);
    });
}
const prices = [1000, 2000, 3000];
const discountedPrices = applyBulkDiscount(prices, 10);
console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);
// ---------- 4. Scope ----------
function scopeExample() {
    let functionVariable = "Function scope variable";
    console.log(functionVariable);
    for (let i = 0; i < 3; i++) {
        let blockVariable = "Block scope variable";
        console.log(blockVariable);
    }
}
scopeExample();
// ---------- 6. Product Objects ----------
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        inStock: true,
        tags: ["Electronics", "Computer"]
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000,
        inStock: true,
        tags: ["Electronics", "Mobile"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        inStock: false,
        tags: ["Audio", "Accessories"]
    },
    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        inStock: true
    }
];
// ---------- 7. Get Available Products ----------
function getAvailableProducts(products) {
    return products.filter((product) => product.inStock);
}
const availableProducts = getAvailableProducts(products);
console.log("Available Products:");
console.log(availableProducts);
// ---------- 9. Apply Discount to Products ----------
function applyDiscountToProducts(products, discountPercent) {
    return products.map((product) => {
        const discountedPrice = product.price -
            (product.price * discountPercent / 100);
        return Object.assign(Object.assign({}, product), { price: discountedPrice, discountPercent: discountPercent });
    });
}
const discountedProducts = applyDiscountToProducts(products, 10);
console.log("Discounted Products:");
console.log(discountedProducts);
