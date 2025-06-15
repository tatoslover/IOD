// Book.js - Book class extending Product for eCommerce system

const Product = require('./Product');

class Book extends Product {
  static salePrice = 12;

  constructor(name, price, description, author) {
    super(name, price, description);
    this.author = author;
  }

  displayInfo() {
    return `${super.displayInfo()} by ${this.author}`;
  }

  static getSalePrice() {
    return this.salePrice;
  }
}

module.exports = Book;