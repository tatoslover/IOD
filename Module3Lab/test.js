// node /Users/samuellove/Documents/GitHub/IOD/Module3Lab/test.js

// This file demonstrates testing individual classes from the eCommerce exercises
// As mentioned in the tips, this allows testing each exercise incrementally

console.log(`
========================
Testing Product Class (Exercise 1)
========================
`);

class Product {
  constructor(name, price, description) {
    this._name = name;
    this.price = price; // Use setter for validation
    this._description = description;
  }

  get name() { return this._name; }
  get price() { return this._price; }
  get description() { return this._description; }

  set name(value) { this._name = value; }
  set price(value) {
    if (value < 0) {
      throw new Error('Price cannot be negative');
    }
    this._price = value;
  }
  set description(value) { this._description = value; }

  displayInfo() {
    return `${this.name} - $${this.price}: ${this.description}`;
  }
}

// Test Product
const testProduct = new Product("Test Laptop", 1200, "Gaming laptop");
console.log("Created product:", testProduct.displayInfo());

testProduct.price = 999;
console.log("After price change:", testProduct.displayInfo());

console.log(`
========================
Testing Inheritance (Exercise 2)
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
const testTV = new TV("Test TV", 800, "Smart TV", 55);
const testShirt = new Shirt("Test Shirt", 25, "Cotton T-shirt", "M");

console.log("TV test:", testTV.displayInfo());
console.log("Shirt test:", testShirt.displayInfo());

console.log(`
========================
Testing Constructor Function (Exercise 3)
========================
`);

function Book(name, price, description, author) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.author = author;
}

Book.prototype.displayInfo = function() {
  return `${this.name} - $${this.price}: ${this.description} by ${this.author}`;
};

// Test Book
const testBook = new Book("Test Book", 15, "Educational book", "Test Author");
console.log("Book test:", testBook.displayInfo());

console.log(`
========================
Testing Static Methods (Exercise 4)
========================
`);

Product.compare = function(product1, product2) {
  return product1.price - product2.price;
};

// Test static method
const products = [testProduct, testTV, testShirt];
console.log("Before sorting:");
products.forEach(p => console.log(p.displayInfo()));

products.sort(Product.compare);
console.log("\nAfter sorting:");
products.forEach(p => console.log(p.displayInfo()));

console.log(`
========================
Testing Validation (Exercise 5)
========================
`);

try {
  const invalidProduct = new Product("Invalid", -100, "Should fail");
} catch (error) {
  console.log("Validation working:", error.message);
}

console.log(`
========================
Testing Private Members (Exercise 6)
========================
`);

class ProductWithStock extends Product {
  #stockCount = 0;

  constructor(name, price, description, initialStock = 0) {
    super(name, price, description);
    this.#stockCount = initialStock;
  }

  updateStock(quantity) {
    if (this.#stockCount + quantity < 0) {
      throw new Error('Insufficient stock');
    }
    this.#stockCount += quantity;
  }

  get stock() {
    return this.#stockCount;
  }

  displayInfo() {
    return `${super.displayInfo()} (Stock: ${this.#stockCount})`;
  }
}

// Test private members
const stockProduct = new ProductWithStock("Stock Test", 30, "Test product", 5);
console.log("Stock product:", stockProduct.displayInfo());
console.log("Stock value:", stockProduct.stock);

stockProduct.updateStock(3);
console.log("After stock update:", stockProduct.displayInfo());

console.log(`
========================
Testing Cart Class (Exercise 7)
========================
`);

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (!(product instanceof Product) && !(product instanceof Book)) {
      throw new Error('Only Product instances can be added to cart');
    }
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    const existingItem = this.items.find(item => item.product === product);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(product) {
    this.items = this.items.filter(item => item.product !== product);
  }

  sort() {
    this.items.sort((a, b) => Product.compare(a.product, b.product));
  }

  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  displayCart() {
    console.log("\n--- Test Cart Contents ---");
    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }
    
    this.items.forEach(item => {
      console.log(`${item.product.displayInfo()} x${item.quantity}`);
    });
    console.log(`Total: $${this.calculateTotal()}`);
  }
}

// Test Cart
const testCart = new Cart();
testCart.addItem(testTV, 1);
testCart.addItem(testShirt, 2);
testCart.addItem(testBook, 1);

console.log("Test cart:");
testCart.displayCart();

testCart.sort();
console.log("\nAfter sorting:");
testCart.displayCart();

console.log(`
========================
Testing Error Handling (Exercise 8)
========================
`);

// Test various error conditions
console.log("Testing validation errors:");

try {
  testCart.addItem("not a product", 1);
} catch (error) {
  console.log("✓ Product type validation:", error.message);
}

try {
  testCart.addItem(testProduct, -1);
} catch (error) {
  console.log("✓ Quantity validation:", error.message);
}

try {
  stockProduct.updateStock(-10);
} catch (error) {
  console.log("✓ Stock validation:", error.message);
}

console.log("\n✓ All tests completed successfully!");
console.log("All classes are working as expected and ready for integration.");