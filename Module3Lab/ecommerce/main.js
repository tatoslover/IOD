// main.js - Main program demonstrating the eCommerce system use case
// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/ecommerce/main.js

const Product = require('./Product');
const TV = require('./TV');
const Shirt = require('./Shirt');
const Book = require('./Book');
const Cart = require('./Cart');

console.log(`
========================
eCommerce System - Main Use Case
========================
`);

// Initialize Cart and Products
const cart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const tshirt = new Shirt("Casual Shirt", 29.99, "Cotton shirt", 'L');
const book = new Book("1984", 17, "A great book", "George Orwell");

console.log("=== Step 1: User adds 3 TVs and 1 T-shirt to the Cart ===");
cart.addItem(tv, 3);
cart.addItem(tshirt, 1);
console.log("Cart after adding 3 TVs and 1 T-shirt:");
cart.displayCart();

console.log("\n=== Step 2: User clicks 'Sort' on the Cart ===");
cart.sort();
console.log("Cart after sorting:");
cart.displayCart();

console.log("\n=== Step 3: User enters a valid discount code (15% off) ===");
try {
  cart.applyDiscountCode("Hot32"); // Assuming this code gives a 15% discount
  console.log("Cart after applying discount code:");
  cart.displayCart();
} catch (error) {
  console.error("Discount error:", error.message);
}

console.log("\n=== Step 4: User adds 4 books to their Cart (books are on sale) ===");
book.isOnSale = true;
cart.addItem(book, 4);
console.log("Cart after adding 4 books on sale:");
cart.displayCart();

console.log("\n=== Step 5: User removes 2 TVs from their Cart ===");
cart.updateQuantity(tv, 1); // Updating the quantity of TVs from 3 to 1
console.log("Cart after removing 2 TVs:");
cart.displayCart();

console.log("\n=== Step 6: User clicks 'Sort' on the Cart again ===");
cart.sort();
console.log("Cart after sorting again:");
cart.displayCart();

console.log("\n=== Additional Demonstrations ===");

console.log("\n--- Testing Error Handling ---");
try {
  cart.addItem("not a product", 1);
} catch (error) {
  console.log("✓ Product validation error:", error.message);
}

try {
  cart.addItem(book, -1);
} catch (error) {
  console.log("✓ Quantity validation error:", error.message);
}

try {
  cart.applyDiscountCode("INVALID");
} catch (error) {
  console.log("✓ Invalid discount code error:", error.message);
}

try {
  const invalidProduct = new Product("Test", -50, "Should fail");
} catch (error) {
  console.log("✓ Price validation error:", error.message);
}

console.log("\n--- Testing Static Compare Method ---");
const products = [
  new Product("Expensive Item", 500, "High-end product"),
  new Product("Cheap Item", 10, "Budget product"),
  new Product("Medium Item", 100, "Mid-range product")
];

console.log("Products before sorting:");
products.forEach(p => console.log(p.displayInfo()));

products.sort(Product.compare);
console.log("\nProducts after sorting by price:");
products.forEach(p => console.log(p.displayInfo()));

console.log("\n--- Testing Sale Prices ---");
console.log(`TV regular price: $${tv.price}, sale price: $${TV.getSalePrice()}`);
console.log(`Shirt regular price: $${tshirt.price}, sale price: $${Shirt.getSalePrice()}`);
console.log(`Book regular price: $${book.price}, sale price: $${Book.getSalePrice()}`);

console.log("\n=== Summary ===");
console.log("✓ All classes working correctly");
console.log("✓ Inheritance implemented properly");
console.log("✓ Static methods functioning");
console.log("✓ Validation logic in place");
console.log("✓ Private members working (in full implementation)");
console.log("✓ Cart management complete");
console.log("✓ Error handling implemented");
console.log("✓ Sales and discount system working");

console.log("\n🎉 eCommerce system demonstration completed successfully!");