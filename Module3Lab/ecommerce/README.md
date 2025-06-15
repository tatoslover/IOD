# eCommerce System - Advanced JavaScript Exercises

This directory contains the complete implementation of the Advanced JavaScript eCommerce exercises (1-8), following modern ES6+ practices and object-oriented programming principles.

## 📁 Project Structure

```
ecommerce/
├── Product.js          # Base Product class with getters/setters
├── TV.js              # TV class extending Product
├── Shirt.js           # Shirt class extending Product  
├── Book.js            # Book class extending Product
├── Cart.js            # Cart class for managing products
├── main.js            # Main program demonstrating use case
├── modular-test.js    # Individual class testing
└── README.md          # This file
```

## 🎯 Exercise Coverage

### Exercise 1: Basic Object with Getters and Setters
- ✅ `Product` class with `name`, `price`, and `description` properties
- ✅ Getters and setters implemented
- ✅ Price validation (no negative values)

### Exercise 2: Prototypal Inheritance
- ✅ `TV` class extends `Product` with `screenSize` property
- ✅ `Shirt` class extends `Product` with `size` property
- ✅ Both classes override `displayInfo()` method

### Exercise 3: Constructor Functions → ES6 Classes
- ✅ `Book` class originally implemented as constructor function
- ✅ Converted to ES6 class for consistency
- ✅ Includes `author` property and inheritance from `Product`

### Exercise 4: Static Methods
- ✅ `Product.compare()` static method for price comparison
- ✅ Compatible with `Array.sort()` for custom sorting
- ✅ Returns numeric values for proper sorting

### Exercise 5: Validation Logic
- ✅ Price validation in setter throws error for negative values
- ✅ Constructor uses setter to ensure validation on creation
- ✅ Comprehensive error handling throughout

### Exercise 6: Private Members
- ✅ Private fields using `#` syntax (demonstrated in JSExtension.js)
- ✅ Public methods for safe access to private data
- ✅ Stock management example implementation

### Exercise 7: Cart Class
- ✅ Manages collection of `{ product, quantity }` objects
- ✅ Add, remove, and update quantity methods
- ✅ Sort functionality using `Product.compare()`
- ✅ Input validation for product types and quantities

### Exercise 8: Advanced Features
- ✅ **8.1-8.4**: Complete cart management with validation
- ✅ **8.5**: Sale system with static sale prices per product type
- ✅ **8.6**: Discount code system with percentage-based discounts
- ✅ **8.7**: Complete main program use case implementation

## 🚀 Running the Code

### Main Program (Complete Use Case)
```bash
node main.js
```

### Individual Class Testing
```bash
node modular-test.js
```

### Full Exercise Suite (All-in-One)
```bash
node ../JSExtension.js
```

## 💡 Key Features

### Product Management
- **Inheritance Hierarchy**: Product → TV/Shirt/Book
- **Validation**: Price cannot be negative
- **Static Methods**: Product comparison for sorting
- **Sale System**: Each product type has static sale prices

### Cart Functionality
- **Add Items**: With quantity validation
- **Remove Items**: Complete removal from cart
- **Update Quantities**: Change quantities or remove if set to 0
- **Sorting**: By price using static compare method
- **Total Calculation**: Includes sale prices and discount codes

### Discount System
- **Predefined Codes**: "Hot32" (15%), "SAVE20" (20%), "WELCOME10" (10%)
- **Validation**: Invalid codes throw errors
- **Application**: Applied to entire cart total

### Error Handling
- **Type Validation**: Only Product instances allowed in cart
- **Quantity Validation**: Must be positive numbers
- **Price Validation**: Cannot be negative
- **Discount Validation**: Codes must exist in system

## 📊 Example Usage

```javascript
const Product = require('./Product');
const TV = require('./TV');
const Cart = require('./Cart');

// Create products
const tv = new TV("Samsung 4K", 1500, "75-inch TV", 75);
const cart = new Cart();

// Add to cart
cart.addItem(tv, 2);

// Apply discount
cart.applyDiscountCode("Hot32"); // 15% off

// Set on sale
tv.isOnSale = true; // Uses TV.getSalePrice() = $1200

// Display cart
cart.displayCart();
```

## 🧪 Testing Strategy

### Unit Testing
- Each class tested independently in `modular-test.js`
- Validation error handling verified
- Edge cases covered (empty cart, duplicate products)

### Integration Testing
- Complete use case in `main.js`
- All classes working together
- Error scenarios demonstrated

### All-in-One Testing
- Complete exercise suite in `JSExtension.js`
- Matches style of other lab files
- Comprehensive demonstrations

## 🔧 Technical Implementation

### ES6+ Features Used
- **Classes**: Modern class syntax with inheritance
- **Static Methods**: Class-level functionality
- **Getters/Setters**: Property access control
- **Template Literals**: String interpolation
- **Destructuring**: Array and object destructuring
- **Spread Operator**: Object and array spreading
- **Arrow Functions**: Concise function syntax

### Design Patterns
- **Inheritance**: Product hierarchy
- **Encapsulation**: Private-like properties with getters/setters
- **Static Factory**: Static methods for class-level functionality
- **Strategy Pattern**: Different discount code strategies

### Error Handling
- **Validation**: Input validation at every entry point
- **Type Checking**: instanceof checks for proper types
- **Graceful Failures**: Meaningful error messages
- **Error Propagation**: Proper error throwing and catching

## 📈 Performance Considerations

- **Efficient Sorting**: Uses built-in Array.sort() with custom comparator
- **Memory Management**: No memory leaks, proper object references
- **Calculation Optimization**: Minimal recalculation of totals
- **Validation**: Early validation to prevent processing invalid data

## 🎓 Learning Outcomes

This implementation demonstrates:
1. **Object-Oriented Programming** in JavaScript
2. **ES6+ Class Syntax** and modern JavaScript features
3. **Inheritance and Polymorphism** concepts
4. **Static Methods** and their use cases
5. **Input Validation** and error handling
6. **Modular Code Organization** with separate files
7. **Testing Strategies** for complex systems
8. **Real-world Application** of programming concepts

## 🔮 Possible Extensions

- **Database Integration**: Persist cart and product data
- **User Authentication**: Multi-user cart management
- **Payment Processing**: Integration with payment APIs
- **Inventory Management**: Stock tracking and availability
- **Advanced Discounts**: Tiered discounts, buy-one-get-one
- **Product Categories**: Hierarchical product organization
- **Search and Filtering**: Product discovery features
- **Wishlist Functionality**: Save items for later

---

*This implementation serves as a comprehensive example of modern JavaScript development practices, suitable for educational purposes and as a foundation for real-world eCommerce applications.*