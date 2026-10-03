// ==========================================
// PART B - PRODUCT INVENTORY MANAGER
// ==========================================

interface InventoryProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
}


// Sample products

let inventoryProducts: InventoryProduct[] = [
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

const productForm =
    document.getElementById("productForm") as HTMLFormElement;

const productNameInput =
    document.getElementById("productName") as HTMLInputElement;

const productPriceInput =
    document.getElementById("productPrice") as HTMLInputElement;

const productStockInput =
    document.getElementById("productStock") as HTMLInputElement;

const productList =
    document.getElementById("productList") as HTMLDivElement;


// Display products

function displayInventory(): void {

    productList.innerHTML = "";

    inventoryProducts.forEach(
        (product: InventoryProduct): void => {

            const productCard =
                document.createElement("div");

            productCard.className = "product-card";

            const stockStatus: string =
                product.stock > 0
                    ? "In Stock"
                    : "Out of Stock";

            const stockClass: string =
                product.stock > 0
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
        }
    );
}


// Add product

productForm.addEventListener(
    "submit",
    (event: SubmitEvent): void => {

        event.preventDefault();

        const name: string =
            productNameInput.value.trim();

        const price: number =
            Number(productPriceInput.value);

        const stock: number =
            Number(productStockInput.value);


        if (
            name === "" ||
            price <= 0 ||
            stock < 0
        ) {
            alert("Please enter valid product details.");
            return;
        }


        const newProduct: InventoryProduct = {
            id: inventoryProducts.length + 1,
            name: name,
            price: price,
            stock: stock
        };


        inventoryProducts.push(newProduct);

        displayInventory();

        productForm.reset();
    }
);


// Display initial products

displayInventory();