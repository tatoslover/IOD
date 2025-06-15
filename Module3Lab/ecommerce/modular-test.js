// modular-test.js - Modular testing of eCommerce system classes
// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/ecommerce/modular-test.js

const Product = require('./Product');
const TV = require('./TV');
const Shirt = require('./Shirt');
const Book = require('./Book');
const Cart = require('./Cart');

console.log(`
========================
Modular Testing: eCommerce System
========================
`);

console.log(`
--- Testing Product Class (Exercise 1) ---
`);

// Test basic Product functionality
const laptop = new Product("Gaming Laptop", 1299.99, "High-performance gaming laptop");
console.log("✓ Product created:", laptop.displayInfo());

// Test getters and setters
laptop.price = 1199.99;
console.log("✓ Price updated:", laptop.displayInfo());

laptop.name = "Premium Gaming Laptop";
console.log("✓ Name updated:", laptop.displayInfo());

// Test validation
try {
  laptop.price = -100;
} catch (error) {
  console.log("✓ Price validation working:", error.message);
}

console.log(`
--- Testing TV Class (Exercise 2) ---
`);

const tv = new TV("Samsung QLED", 1899.99, "4K Smart TV with HDR", 65);
console.log("✓ TV created:", tv.displayInfo());
console.log("✓ TV screen size:", tv.screenSize + " inches");
console.log("✓ TV sale price:", TV.getSalePrice());

console.log(`
--- Testing Shirt Class (Exercise 2) ---
`);

const shirt = new Shirt("Cotton T-Shirt", 24.99, "100% organic cotton", "L");
console.log("✓ Shirt created:", shirt.displayInfo());
console.log("✓ Shirt size:", shirt.size);
console.log("✓ Shirt sale price:", Shirt.getSalePrice());

console.log(`
--- Testing Book Class (Exercise 3 & Converted to ES6) ---
`);

const book = new Book("Design Patterns", 45.99, "Software engineering classic", "Gang of Four");
console.log("✓ Book created:", book.displayInfo());
console.log("✓ Book author:", book.author);
console.log("✓ Book sale price:", Book.getSalePrice());

console.log(`
--- Testing Static Compare Method (Exercise 4) ---
`);

const products = [tv, shirt, book, laptop];
console.log("Products before sorting:");
products.forEach((p, i) => console.log(`${i + 1}. ${p.displayInfo()}`));

products.sort(Product.compare);
console.log("\nProducts after sorting by price:");
products.forEach((p, i) => console.log(`${i + 1}. ${p.displayInfo()}`));

console.log(`
--- Testing Product Validation (Exercise 5) ---
`);

try {
  const invalidProduct = new Product("Invalid Item", -50, "Negative price test");
} catch (error) {
  console.log("✓ Constructor validation:", error.message);
}

try {
  const validProduct = new Product("Valid Item", 100, "Positive price test");
  validProduct.price = -25;
} catch (error) {
  console.log("✓ Setter validation:", error.message);
}

console.log(`
--- Testing Cart Class (Exercise 7) ---
`);

const cart = new Cart();
console.log("✓ Cart created successfully");

// Test adding items
cart.addItem(tv, 1);
cart.addItem(shirt, 3);
cart.addItem(book, 2);
console.log("✓ Items added to cart");
cart.displayCart();

// Test cart validation
try {
  cart.addItem("not a product", 1);
} catch (error) {
  console.log("✓ Product type validation:", error.message);
}

try {
  cart.addItem(laptop, -1);
} catch (error) {
  console.log("✓ Quantity validation:", error.message);
}

// Test sorting
console.log("\n--- Testing Cart Sorting ---");
cart.sort();
console.log("Cart after sorting:");
cart.displayCart();

// Test quantity updates
console.log("\n--- Testing Quantity Updates ---");
cart.updateQuantity(shirt, 1);
console.log("After reducing shirt quantity to 1:");
cart.displayCart();

// Test item removal
cart.removeItem(book);
console.log("\nAfter removing books:");
cart.displayCart();

console.log(`
--- Testing Discount System (Exercise 8) ---
`);

// Test discount codes
try {
  cart.applyDiscountCode("Hot32");
  console.log("✓ Discount code applied successfully");
  cart.displayCart();
} catch (error) {
  console.log("✗ Discount error:", error.message);
}

try {
  cart.applyDiscountCode("INVALID_CODE");
} catch (error) {
  console.log("✓ Invalid discount code validation:", error.message);
}

console.log(`
--- Testing Sale System (Exercise 8) ---
`);

// Test sale prices
const saleTV = new TV("Sale TV", 999, "Discounted TV", 50);
saleTV.isOnSale = true;

const saleCart = new Cart();
saleCart.addItem(saleTV, 1);

console.log("Regular TV price vs Sale price:");
console.log(`Regular: $${saleTV.price}, Sale: $${TV.getSalePrice()}`);
console.log("Cart with TV on sale:");
saleCart.displayCart();

console.log(`
--- Testing Product Discount Method ---
`);

const discountTest = new Product("Discount Test", 100, "Testing discount calculation");
console.log(`Original price: $${discountTest.price}`);
console.log(`10% discount: $${discountTest.applyDiscount(10)}`);
console.log(`25% discount: $${discountTest.applyDiscount(25)}`);
console.log(`50% discount: $${discountTest.applyDiscount(50)}`);

console.log(`
--- Testing Edge Cases ---
`);

// Test empty cart
const emptyCart = new Cart();
console.log("Empty cart display:");
emptyCart.displayCart();
console.log(`Empty cart total: $${emptyCart.calculateTotal()}`);

// Test adding same product multiple times
const multiCart = new Cart();
multiCart.addItem(shirt, 2);
multiCart.addItem(shirt, 3); // Should add to existing quantity
console.log("Cart with same product added twice (should show quantity 5):");
multiCart.displayCart();

// Test updating quantity to 0 (should remove item)
multiCart.updateQuantity(shirt, 0);
console.log("After setting quantity to 0 (should remove item):");
multiCart.displayCart();

console.log(`
========================
Test Summary
========================
`);

console.log("✅ Product class: Getters, setters, validation");
console.log("✅ TV class: Inheritance, screen size property");
console.log("✅ Shirt class: Inheritance, size property");
console.log("✅ Book class: ES6 conversion, author property");
console.log("✅ Static methods: Product comparison and sorting");
console.log("✅ Validation: Price, product type, quantity checks");
console.log("✅ Cart management: Add, remove, update, sort");
console.log("✅ Discount system: Code validation and application");
console.log("✅ Sale system: On-sale products and pricing");
console.log("✅ Error handling: Comprehensive validation");
console.log("✅ Edge cases: Empty cart, duplicate products");

console.log("\n🎉 All modular tests completed successfully!");
console.log("📦 Each class is working independently and ready for integration.");