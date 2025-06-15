// Shirt.js - Shirt class extending Product for eCommerce system

const Product = require('./Product');

class Shirt extends Product {
  static salePrice = 19.99;

  constructor(name, price, description, size) {
    super(name, price, description);
    this.size = size;
  }

  displayInfo() {
    return `${super.displayInfo()} (Size: ${this.size})`;
  }

  static getSalePrice() {
    return this.salePrice;
  }
}

module.exports = Shirt;