// Product.js - Base Product class for eCommerce system

class Product {
  constructor(name, price, description) {
    this._name = name;
    this.price = price; // Use setter for validation
    this._description = description;
    this.isOnSale = false;
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

  // Apply discount method
  applyDiscount(discountPercentage) {
    return this.price * (1 - discountPercentage / 100);
  }

  // Static method to compare two products by price
  static compare(product1, product2) {
    return product1.price - product2.price;
  }
}

module.exports = Product;