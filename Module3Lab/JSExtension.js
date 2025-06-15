// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/JSExtension.js

/*
========================================================================================
ADVANCED JAVASCRIPT: eCommerce EXERCISES 1-8
========================================================================================

This file contains the complete implementation of all 8 eCommerce exercises,
demonstrating advanced JavaScript concepts including:

✅ Exercise 1: Basic Object with Getters and Setters
✅ Exercise 2: Prototypal Inheritance (TV, Shirt classes)
✅ Exercise 3: Constructor Functions → ES6 Classes (Book)
✅ Exercise 4: Static Methods for Product Comparison
✅ Exercise 5: Validation Logic (Price validation)
✅ Exercise 6: Private Members (Stock management)
✅ Exercise 7: Cart Class for Product Management
✅ Exercise 8: Complete Transaction System with Sales & Discounts

FEATURES IMPLEMENTED:
- Product hierarchy with inheritance
- Input validation and error handling
- Cart management (add, remove, update, sort)
- Discount code system
- Sale price system
- Static comparison methods
- Private field demonstration
- Complete use case simulation

MODULAR VERSION:
For a modular implementation with separate files, see the ./ecommerce/ directory:
- Product.js, TV.js, Shirt.js, Book.js, Cart.js
- main.js (complete use case)
- modular-test.js (individual testing)

========================================================================================
*/

console.log(`
========================
Advanced JS: eComm Exercise 1
Basic Object with Getters and Setters
========================
`);

class Product {
  constructor(name, price, description) {
    this._name = name;
    this.price = price; // Use setter for validation
    this._description = description;
  }

  // Getters
  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get description() {
    return this._description;
  }

  // Setters
  set name(value) {
    this._name = value;
  }

  set price(value) {
    if (value < 0) {
      throw new Error('Price cannot be negative');
    }
    this._price = value;
  }

  set description(value) {
    this._description = value;
  }

  // Method to display product details
  displayInfo() {
    return `${this.name} - $${this.price}: ${this.description}`;
  }
}

// Test Product class
const product1 = new Product("Laptop", 999.99, "High-performance laptop");
console.log("Original product:", product1.displayInfo());

product1.price = 899.99;
console.log("After price update:", product1.displayInfo());

console.log(`
========================
Advanced JS: eComm Exercise 2
Prototypal Inheritance
========================
`);

class TV extends Product {
  constructor(name, price, description, screenSize) {
    super(name, price, description);
    this.screenSize = screenSize;
  }

  displayInfo() {
    return `${super.displayInfo()} (Screen: ${this.screenSize}")`;
  }
}

class Shirt extends Product {
  constructor(name, price, description, size) {
    super(name, price, description);
    this.size = size;
  }

  displayInfo() {
    return `${super.displayInfo()} (Size: ${this.size})`;
  }
}

// Test inheritance
const tv1 = new TV("Samsung 4K TV", 1500, "75-inch 4K TV", 75);
const shirt1 = new Shirt("Casual Shirt", 29.99, "Cotton shirt", 'L');

console.log("TV:", tv1.displayInfo());
console.log("Shirt:", shirt1.displayInfo());

console.log(`
========================
Advanced JS: eComm Exercise 3
Using Constructor Functions
========================
`);

// Constructor function for Book (ES5 style)
function Book(name, price, description, author) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.author = author;
  this.human = true; // Books are made by humans
}

// Prototype method to display book info
Book.prototype.displayInfo = function() {
  return `${this.name} - $${this.price}: ${this.description} by ${this.author}`;
};

// Test Book constructor
const book1 = new Book("1984", 17, "A great book", "George Orwell");
console.log("Book:", book1.displayInfo());

console.log(`
========================
Advanced JS: eComm Exercise 4
Static Methods in Class
========================
`);

// Add static compare method to Product class
Product.compare = function(product1, product2) {
  // Returns negative if product1 is cheaper, positive if more expensive, 0 if equal
  return product1.price - product2.price;
};

// Test static method with array sorting
const products = [
  new Product("Expensive Item", 500, "High-end product"),
  new Product("Cheap Item", 10, "Budget product"),
  new Product("Medium Item", 100, "Mid-range product")
];

console.log("Before sorting:");
products.forEach(p => console.log(p.displayInfo()));

products.sort(Product.compare);

console.log("\nAfter sorting by price:");
products.forEach(p => console.log(p.displayInfo()));

console.log(`
========================
Advanced JS: eComm Exercise 5
Implementing Validation Logic
========================
`);

// Validation is already implemented in the Product class setter
// Test validation
try {
  const invalidProduct = new Product("Test", -50, "Should fail");
} catch (error) {
  console.log("Validation error caught:", error.message);
}

try {
  const validProduct = new Product("Valid Product", 25, "This should work");
  console.log("Valid product created:", validProduct.displayInfo());
  
  // Test setting negative price
  validProduct.price = -10;
} catch (error) {
  console.log("Validation error caught:", error.message);
}

console.log(`
========================
Advanced JS: eComm Exercise 6
Private Members
========================
`);

class ProductWithStock extends Product {
  #stockCount = 0; // Private field

  constructor(name, price, description, initialStock = 0) {
    super(name, price, description);
    this.#stockCount = initialStock;
  }

  // Public method to safely update stock
  updateStock(quantity) {
    if (this.#stockCount + quantity < 0) {
      throw new Error('Insufficient stock');
    }
    this.#stockCount += quantity;
  }

  // Getter for stock (read-only access)
  get stock() {
    return this.#stockCount;
  }

  displayInfo() {
    return `${super.displayInfo()} (Stock: ${this.#stockCount})`;
  }
}

// Test private members
const stockProduct = new ProductWithStock("Stocked Item", 50, "Item with stock", 10);
console.log("Product with stock:", stockProduct.displayInfo());

stockProduct.updateStock(5);
console.log("After adding 5 to stock:", stockProduct.displayInfo());

try {
  stockProduct.updateStock(-20); // Should fail
} catch (error) {
  console.log("Stock error:", error.message);
}

console.log(`
========================
Advanced JS: eComm Exercise 7
Cart Class for Managing Products
========================
`);

class Cart {
  constructor() {
    this.items = []; // Array of { product, quantity }
    this.discountCodes = [
      { code: "Hot32", isApplied: false, discountPercentage: 15 },
      { code: "SAVE20", isApplied: false, discountPercentage: 20 },
      { code: "WELCOME10", isApplied: false, discountPercentage: 10 }
    ];
  }

  // Add item to cart
  addItem(product, quantity) {
    // Validation: must be a Product instance
    if (!(product instanceof Product) && !(product instanceof Book)) {
      throw new Error('Only Product instances can be added to cart');
    }

    // Validation: quantity must be positive
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    // Check if product already exists in cart
    const existingItem = this.items.find(item => item.product === product);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  // Remove item from cart
  removeItem(product) {
    this.items = this.items.filter(item => item.product !== product);
  }

  // Update quantity of item in cart
  updateQuantity(product, newQuantity) {
    const item = this.items.find(item => item.product === product);
    if (item) {
      if (newQuantity <= 0) {
        this.removeItem(product);
      } else {
        item.quantity = newQuantity;
      }
    }
  }

  // Sort cart items by price using Product.compare
  sort() {
    this.items.sort((a, b) => Product.compare(a.product, b.product));
  }

  // Apply discount code
  applyDiscountCode(code) {
    const discountCode = this.discountCodes.find(dc => dc.code === code);
    if (!discountCode) {
      throw new Error('Invalid discount code');
    }
    discountCode.isApplied = true;
  }

  // Calculate total price
  calculateTotal() {
    let total = 0;
    
    this.items.forEach(item => {
      let itemPrice = item.product.price;
      
      // Check if product is on sale
      if (item.product.isOnSale && item.product.constructor.getSalePrice) {
        itemPrice = item.product.constructor.getSalePrice();
      }
      
      total += itemPrice * item.quantity;
    });

    // Apply discount codes
    this.discountCodes.forEach(discountCode => {
      if (discountCode.isApplied) {
        total *= (1 - discountCode.discountPercentage / 100);
      }
    });

    return Math.round(total * 100) / 100; // Round to 2 decimal places
  }

  // Display cart contents
  displayCart() {
    console.log("\n--- Cart Contents ---");
    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }

    this.items.forEach(item => {
      const saleInfo = item.product.isOnSale ? " (ON SALE)" : "";
      console.log(`${item.product.displayInfo()} x${item.quantity}${saleInfo}`);
    });

    // Show applied discount codes
    const appliedDiscounts = this.discountCodes.filter(dc => dc.isApplied);
    if (appliedDiscounts.length > 0) {
      console.log("\nApplied Discounts:");
      appliedDiscounts.forEach(dc => {
        console.log(`- ${dc.code}: ${dc.discountPercentage}% off`);
      });
    }

    console.log(`\nTotal: $${this.calculateTotal()}`);
  }
}

// Test Cart class
const cart = new Cart();
cart.addItem(tv1, 1);
cart.addItem(shirt1, 2);

console.log("Cart after adding items:");
cart.displayCart();

console.log(`
========================
Advanced JS: eComm Exercise 8
Simulating Transactions and Handling Errors
========================
`);

// Update classes to support sales
Product.prototype.isOnSale = false;

Product.prototype.applyDiscount = function(discountPercentage) {
  return this.price * (1 - discountPercentage / 100);
};

// Update TV class with static sale price
TV.salePrice = 1200;
TV.getSalePrice = function() {
  return this.salePrice;
};

// Update Shirt class with static sale price
Shirt.salePrice = 19.99;
Shirt.getSalePrice = function() {
  return this.salePrice;
};

// Convert Book to ES6 class for consistency
class BookES6 extends Product {
  static salePrice = 12;
  
  constructor(name, price, description, author) {
    super(name, price, description);
    this.author = author;
  }

  static getSalePrice() {
    return this.salePrice;
  }

  displayInfo() {
    return `${super.displayInfo()} by ${this.author}`;
  }
}

console.log(`
========================
Exercise 8.7: Main Program Use Case
========================
`);

// Initialize Cart and Products
const mainCart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const tshirt = new Shirt("Casual Shirt", 29.99, "Cotton shirt", 'L');
const book = new BookES6("1984", 17, "A great book", "George Orwell");

// User adds 3 TVs and 1 T-shirt to the Cart
mainCart.addItem(tv, 3);
mainCart.addItem(tshirt, 1);
console.log("Cart after adding 3 TVs and 1 T-shirt:");
mainCart.displayCart();

// User clicks 'Sort' on the Cart
mainCart.sort();
console.log("\nCart after sorting:");
mainCart.displayCart();

// User enters a valid discount code
try {
  mainCart.applyDiscountCode("Hot32"); // 15% discount
  console.log("\nCart after applying discount code:");
  mainCart.displayCart();
} catch (error) {
  console.error("Discount error:", error.message);
}

// User adds 4 books to their Cart (books are on sale)
book.isOnSale = true;
mainCart.addItem(book, 4);
console.log("\nCart after adding 4 books on sale:");
mainCart.displayCart();

// User removes 2 TVs from their Cart
mainCart.updateQuantity(tv, 1); // Reduces from 3 to 1
console.log("\nCart after removing 2 TVs:");
mainCart.displayCart();

// User clicks 'Sort' on the Cart again
mainCart.sort();
console.log("\nCart after sorting again:");
mainCart.displayCart();

console.log(`
========================
Additional Testing
========================
`);

// Test validation errors
console.log("\nTesting validation errors:");

try {
  mainCart.addItem("not a product", 1);
} catch (error) {
  console.log("Validation error:", error.message);
}

try {
  mainCart.addItem(book, -1);
} catch (error) {
  console.log("Validation error:", error.message);
}

try {
  mainCart.applyDiscountCode("INVALID");
} catch (error) {
  console.log("Discount error:", error.message);
}

console.log("\nAll exercises completed successfully!");