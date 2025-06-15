// TV.js - TV class extending Product for eCommerce system

const Product = require('./Product');

class TV extends Product {
  static salePrice = 1200;

  constructor(name, price, description, screenSize) {
    super(name, price, description);
    this.screenSize = screenSize;
  }

  displayInfo() {
    return `${super.displayInfo()} (Screen: ${this.screenSize}")`;
  }

  static getSalePrice() {
    return this.salePrice;
  }
}

module.exports = TV;