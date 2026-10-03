"use strict";
// ==========================================
// PART B - PRODUCT INVENTORY MANAGER
// ==========================================
// Sample products
let inventoryProducts = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000,
        stock: 10
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        stock: 0
    }
];
// Get HTML elements
const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productStockInput = document.getElementById("productStock");
const productList = document.getElementById("productList");
// Display products
function displayInventory() {
    productList.innerHTML = "";
    inventoryProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        const stockStatus = product.stock > 0
            ? "In Stock"
            : "Out of Stock";
        const stockClass = product.stock > 0
            ? "in-stock"
            : "out-of-stock";
        productCard.innerHTML = `
                <h3>${product.name}</h3>

                <p>
                    <strong>Price:</strong>
                    ₹${product.price}
                </p>

                <p>
                    <strong>Stock:</strong>
                    ${product.stock}
                </p>

                <p class="${stockClass}">
                    ${stockStatus}
                </p>
            `;
        productList.appendChild(productCard);
    });
}
// Add product
productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);
    const stock = Number(productStockInput.value);
    if (name === "" ||
        price <= 0 ||
        stock < 0) {
        alert("Please enter valid product details.");
        return;
    }
    const newProduct = {
        id: inventoryProducts.length + 1,
        name: name,
        price: price,
        stock: stock
    };
    inventoryProducts.push(newProduct);
    displayInventory();
    productForm.reset();
});
// Display initial products
displayInventory();
