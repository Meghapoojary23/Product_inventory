
// ==========================================
// PART A - TYPESCRIPT BASICS
// ==========================================

// ---------- 1. Basic Types & Variables ----------

let productName: string = "Laptop";
let price: number = 50000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer", "Laptop"];
let productId: number | string = 101;

console.log("Product Name:", productName);
console.log("Price:", price);
console.log("In Stock:", inStock);
console.log("Tags:", tags);
console.log("Product ID:", productId);


// ---------- 2. Functions ----------

// Function with typed parameters and return type
function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log(
    "Price after 10% discount:",
    calculateDiscount(1000)
);

console.log(
    "Price after 20% discount:",
    calculateDiscount(1000, 20)
);


// ---------- 3. map() Function ----------

function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {

    return prices.map((price: number): number => {
        return price - (price * discountRate / 100);
    });
}

const prices: number[] = [1000, 2000, 3000];

const discountedPrices: number[] =
    applyBulkDiscount(prices, 10);

console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);


// ---------- 4. Scope ----------

function scopeExample(): void {

    let functionVariable: string =
        "Function scope variable";

    console.log(functionVariable);

    for (let i: number = 0; i < 3; i++) {

        let blockVariable: string =
            "Block scope variable";

        console.log(blockVariable);
    }
}

scopeExample();


// ==========================================
// INTERFACES & OBJECTS
// ==========================================

// ---------- 5. Product Interface ----------

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}


// ---------- 6. Product Objects ----------

const products: Product[] = [
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

function getAvailableProducts(
    products: Product[]
): Product[] {

    return products.filter(
        (product: Product): boolean => product.inStock
    );
}

const availableProducts: Product[] =
    getAvailableProducts(products);

console.log("Available Products:");
console.log(availableProducts);


// ---------- 8. DiscountedProduct Interface ----------

interface DiscountedProduct extends Product {
    discountPercent: number;
}


// ---------- 9. Apply Discount to Products ----------

function applyDiscountToProducts(
    products: Product[],
    discountPercent: number
): DiscountedProduct[] {

    return products.map(
        (product: Product): DiscountedProduct => {

            const discountedPrice: number =
                product.price -
                (product.price * discountPercent / 100);

            return {
                ...product,
                price: discountedPrice,
                discountPercent: discountPercent
            };
        }
    );
}


const discountedProducts: DiscountedProduct[] =
    applyDiscountToProducts(products, 10);

console.log("Discounted Products:");
console.log(discountedProducts);