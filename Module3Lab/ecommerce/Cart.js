// Cart.js - Cart class for managing products in eCommerce system

const Product = require('./Product');

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
    if (!(product instanceof Product)) {
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

module.exports = Cart;