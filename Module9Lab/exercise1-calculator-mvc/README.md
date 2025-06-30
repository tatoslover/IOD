# Exercise 1: Enhanced Calculator - MVC Architecture

## 📋 Overview

This project demonstrates the transformation of a basic calculator application into a robust, well-structured MVC (Model-View-Controller) architecture. Built as part of Module 9 Lab exercises, this enhanced calculator showcases professional development practices and clean code architecture.

## 🏗️ Architecture

### MVC Pattern Implementation

```
exercise1-calculator-mvc/
├── models/
│   └── Calculator.js              # Business logic & mathematical operations
├── controllers/
│   └── CalculatorController.js    # Request handling & response formatting
├── routes/
│   └── calculatorRoutes.js        # URL routing & endpoint definitions
├── middleware/
│   └── validation.js              # Input validation & sanitization
├── views/
│   ├── calculator.html            # Frontend user interface
│   └── static/                    # Static assets (CSS, images)
├── app.js                         # Express application setup
├── package.json                   # Dependencies & project configuration
└── README.md                      # This documentation
```

### Key Improvements Over Original

- ✅ **Proper MVC Separation**: Clean separation of concerns
- ✅ **Enhanced Validation**: Comprehensive input validation and error handling
- ✅ **Extended Functionality**: Power operations and square root
- ✅ **History Tracking**: Operation logging with timestamps
- ✅ **Statistics**: Usage analytics and operation counts
- ✅ **RESTful Design**: Consistent API endpoints
- ✅ **Professional UI**: Enhanced user interface with modern features

## 🚀 Features

### Mathematical Operations
- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Power (x^y), square root (√x)
- **Precision Handling**: Floating-point arithmetic corrections
- **Input Validation**: Comprehensive number validation and range checking

### API Management
- **History Tracking**: View calculation history with timestamps
- **Statistics**: Real-time usage analytics
- **Health Monitoring**: API health checks and system information
- **Error Handling**: Detailed error messages with suggestions

### User Interface
- **Responsive Design**: Mobile-friendly calculator interface
- **Keyboard Shortcuts**: Ctrl+key combinations for operations
- **Real-time Feedback**: Loading states and visual feedback
- **History Viewer**: Browse and clear calculation history

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd IOD/Module9Lab/exercise1-calculator-mvc
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   # For development with auto-restart
   npm run dev

   # For production
   npm start
   ```

4. **Access the application:**
   - **Calculator Interface**: http://localhost:3004
   - **API Documentation**: http://localhost:3004/api
   - **Health Check**: http://localhost:3004/health

## 📡 API Reference

### Base URL
```
http://localhost:3004/calculator
```

### Endpoints

#### Basic Operations
```bash
# Addition
GET /calculator/add?num1=5&num2=3
POST /calculator/add (body: {"num1": 5, "num2": 3})

# Subtraction
GET /calculator/subtract?num1=10&num2=4
POST /calculator/subtract (body: {"num1": 10, "num2": 4})

# Multiplication
GET /calculator/multiply?num1=6&num2=7
POST /calculator/multiply (body: {"num1": 6, "num2": 7})

# Division
GET /calculator/divide?num1=20&num2=4
POST /calculator/divide (body: {"num1": 20, "num2": 4})
```

#### Advanced Operations
```bash
# Power (x^y)
GET /calculator/power?num1=2&num2=3
POST /calculator/power (body: {"num1": 2, "num2": 3})

# Square Root
GET /calculator/sqrt?num=16
POST /calculator/sqrt (body: {"num": 16})
```

#### Management Endpoints
```bash
# Get calculation history
GET /calculator/history?limit=10

# Clear calculation history
DELETE /calculator/history

# Get usage statistics
GET /calculator/stats

# Health check
GET /calculator/health
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "operation": "addition",
  "result": 8,
  "operands": {
    "num1": 5,
    "num2": 3
  },
  "timestamp": "2024-01-15T10:30:00.000Z",
  "calculatorId": 1705320600000
}
```

#### Error Response
```json
{
  "success": false,
  "error": "Both num1 and num2 parameters are required",
  "statusCode": 400,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "calculatorId": 1705320600000
}
```

## 🧪 Testing

### Manual Testing
```bash
# Test basic addition
curl "http://localhost:3004/calculator/add?num1=5&num2=3"

# Test power operation
curl "http://localhost:3004/calculator/power?num1=2&num2=3"

# Test square root
curl "http://localhost:3004/calculator/sqrt?num=16"

# Test history
curl "http://localhost:3004/calculator/history?limit=5"

# Test health check
curl "http://localhost:3004/health"
```

### Available Test Scripts
```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Health check script
npm run health-check
```

## 🎯 Usage Examples

### Frontend Interface
1. Open http://localhost:3004 in your browser
2. Enter numbers in the input fields
3. Click operation buttons or use keyboard shortcuts
4. View results and operation history
5. Access advanced features like power and square root

### API Usage
```javascript
// Using fetch API
const response = await fetch('/calculator/add?num1=5&num2=3');
const result = await response.json();
console.log(result.result); // 8

// Using POST request
const response = await fetch('/calculator/multiply', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ num1: 6, num2: 7 })
});
const result = await response.json();
console.log(result.result); // 42
```

## ⌨️ Keyboard Shortcuts

- **Ctrl + +** or **Ctrl + =**: Addition
- **Ctrl + -**: Subtraction
- **Ctrl + ***: Multiplication
- **Ctrl + /**: Division
- **Enter**: Execute operation (defaults to addition)
- **Tab**: Navigate between input fields

## 🔧 Development

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with auto-restart
npm test           # Run test suite
npm run lint       # Check code quality
npm run lint:fix   # Fix linting issues automatically
```

### Code Quality
- **ESLint**: Configured for Node.js and ES2021
- **Error Handling**: Comprehensive error catching and logging
- **Input Validation**: Extensive input sanitization and validation
- **Documentation**: Inline code documentation and JSDoc comments

## 🏆 Key Learning Outcomes

### MVC Architecture
- **Model**: Encapsulates business logic and data operations
- **View**: Handles user interface and presentation
- **Controller**: Manages user input and coordinates between Model and View

### Professional Development Practices
- **Separation of Concerns**: Each component has a single responsibility
- **Error Handling**: Graceful error handling at all levels
- **Input Validation**: Security-focused input sanitization
- **API Design**: RESTful principles and consistent responses
- **Code Organization**: Logical file structure and naming conventions

### Advanced Features
- **Middleware Pattern**: Reusable validation and processing components
- **Singleton Pattern**: Consistent calculator state management
- **Observer Pattern**: Real-time UI updates and statistics
- **Error Recovery**: Comprehensive error handling and user feedback

## 🔍 Troubleshooting

### Common Issues

**Port already in use (EADDRINUSE)**
```bash
# Find and kill process using port 3004
lsof -ti:3004 | xargs kill -9
# Or change port in app.js
```

**Module not found errors**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**API not responding**
```bash
# Check server status
npm run health-check
# Or restart server
npm run dev
```

### Debug Mode
```bash
# Start with debug logging
DEBUG=* npm run dev

# Check application logs in console for detailed error information
```

## 📚 Technical Details

### Dependencies
- **express**: Web framework for Node.js
- **cors**: Enable cross-origin requests
- **morgan**: HTTP request logging

### Dev Dependencies
- **nodemon**: Auto-restart during development
- **jest**: Testing framework
- **supertest**: HTTP testing
- **eslint**: Code linting

### Browser Compatibility
- **Modern browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **JavaScript**: ES6+ features used
- **CSS**: Flexbox and Grid layouts

## 🎓 Educational Value

This exercise demonstrates:

1. **MVC Architecture**: Proper separation of concerns in web applications
2. **RESTful API Design**: Creating consistent and intuitive API endpoints
3. **Input Validation**: Security best practices for user input handling
4. **Error Handling**: Professional error management and user feedback
5. **Code Organization**: Scalable project structure and maintainable code
6. **Modern JavaScript**: ES6+ features and async/await patterns
7. **Professional Development**: Documentation, testing, and deployment practices

---

## 📄 License

MIT License - Feel free to use this code for educational purposes.

## 👨‍💻 Author

**IOD Student** - Module 9 Lab Exercise 1

---

*This project successfully transforms a basic calculator into a professional-grade application demonstrating MVC architecture principles and modern web development practices.*