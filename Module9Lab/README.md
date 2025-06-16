# Module 9 Lab Exercises

This repository contains lab exercises for Module 9, covering advanced API development, RESTful services, real-time communication with sockets, and Model-View-Controller architecture patterns.

## Overview

The Module 9 lab exercises progress from basic API development to sophisticated real-time applications with WebSocket integration. Each exercise builds upon previous concepts while introducing advanced backend development patterns essential for modern web applications and microservices architecture.

## Skills Developed

- **API Development:** RESTful API design, HTTP methods, status codes, versioning
- **Real-time Communication:** WebSocket implementation, Socket.IO, event-driven architecture
- **MVC Architecture:** Model-View-Controller patterns, separation of concerns
- **Authentication & Authorization:** JWT tokens, OAuth, API security
- **API Documentation:** Swagger/OpenAPI, automated documentation generation
- **Microservices:** Service-oriented architecture, API gateway patterns
- **Performance Optimization:** API caching, rate limiting, load balancing
- **Testing:** API testing, integration testing, load testing

## Software Engineering
### Module 9 - Lab Exercises

Welcome to Module 9 of the IOD Software Engineering course!

This module focuses on building robust, scalable APIs and real-time applications. You'll master the skills needed to create production-ready backend services that can handle complex business logic and high-traffic scenarios.

---

## Lab Exercise 1: RESTful API Fundamentals

### Learning Objectives:
- Understand REST architectural principles
- Design and implement RESTful endpoints
- Handle HTTP methods and status codes correctly
- Implement proper error handling and validation

### Instructions:
1. **REST Principles**
   - Study the six constraints of REST architecture
   - Understand resource-based URLs and HTTP verbs
   - Learn about stateless communication and cacheability
   - Explore HATEOAS (Hypermedia as the Engine of Application State)

2. **API Design**
   ```javascript
   // Express.js RESTful API structure
   const express = require('express');
   const app = express();
   
   // Middleware
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   
   // RESTful routes for a blog API
   app.get('/api/v1/posts', getAllPosts);           // GET all posts
   app.get('/api/v1/posts/:id', getPostById);       // GET specific post
   app.post('/api/v1/posts', createPost);           // CREATE new post
   app.put('/api/v1/posts/:id', updatePost);        // UPDATE entire post
   app.patch('/api/v1/posts/:id', partialUpdate);   // PARTIAL update
   app.delete('/api/v1/posts/:id', deletePost);     // DELETE post
   ```

3. **Response Formatting**
   ```javascript
   // Standardized API response format
   const apiResponse = {
     success: true,
     data: {
       posts: [...],
       pagination: {
         page: 1,
         limit: 10,
         total: 250,
         totalPages: 25
       }
     },
     message: "Posts retrieved successfully",
     timestamp: new Date().toISOString()
   };
   ```

### Key REST Concepts:
- **Resource Identification:** Clear, hierarchical URLs
- **HTTP Methods:** GET, POST, PUT, PATCH, DELETE
- **Status Codes:** 200, 201, 400, 401, 404, 500, etc.
- **Content Negotiation:** JSON, XML response formats
- **Versioning:** API version management strategies

### Submission:
Complete RESTful API with full CRUD operations and proper HTTP status codes.

### Extension:
Implement API versioning and content negotiation for multiple response formats.

---

## Lab Exercise 2: Advanced API Features

### Learning Objectives:
- Implement authentication and authorization
- Add input validation and sanitization
- Create middleware for cross-cutting concerns
- Handle file uploads and processing

### Instructions:
1. **Authentication System**
   ```javascript
   const jwt = require('jsonwebtoken');
   const bcrypt = require('bcrypt');
   
   // User registration
   app.post('/api/v1/auth/register', async (req, res) => {
     try {
       const { email, password, name } = req.body;
       
       // Validate input
       if (!email || !password || !name) {
         return res.status(400).json({
           success: false,
           message: 'All fields are required'
         });
       }
       
       // Hash password
       const hashedPassword = await bcrypt.hash(password, 12);
       
       // Create user
       const user = await User.create({
         email,
         password: hashedPassword,
         name
       });
       
       // Generate JWT
       const token = jwt.sign(
         { userId: user.id, email: user.email },
         process.env.JWT_SECRET,
         { expiresIn: '24h' }
       );
       
       res.status(201).json({
         success: true,
         data: { user: { id: user.id, email, name }, token },
         message: 'User registered successfully'
       });
       
     } catch (error) {
       res.status(500).json({
         success: false,
         message: 'Registration failed',
         error: error.message
       });
     }
   });
   ```

2. **Middleware Implementation**
   ```javascript
   // Authentication middleware
   const authenticateToken = (req, res, next) => {
     const authHeader = req.headers['authorization'];
     const token = authHeader && authHeader.split(' ')[1];
     
     if (!token) {
       return res.status(401).json({
         success: false,
         message: 'Access token required'
       });
     }
     
     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
       if (err) {
         return res.status(403).json({
           success: false,
           message: 'Invalid or expired token'
         });
       }
       req.user = user;
       next();
     });
   };
   
   // Rate limiting middleware
   const rateLimit = require('express-rate-limit');
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // limit each IP to 100 requests per windowMs
     message: {
       success: false,
       message: 'Too many requests, please try again later'
     }
   });
   ```

3. **Input Validation**
   ```javascript
   const { body, validationResult } = require('express-validator');
   
   // Validation rules
   const postValidation = [
     body('title')
       .isLength({ min: 3, max: 100 })
       .withMessage('Title must be between 3 and 100 characters'),
     body('content')
       .isLength({ min: 10 })
       .withMessage('Content must be at least 10 characters'),
     body('category')
       .isIn(['tech', 'lifestyle', 'business', 'health'])
       .withMessage('Invalid category')
   ];
   
   // Validation middleware
   const handleValidationErrors = (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({
         success: false,
         message: 'Validation failed',
         errors: errors.array()
       });
     }
     next();
   };
   ```

### Security Features:
- **JWT Authentication:** Secure token-based authentication
- **Password Hashing:** bcrypt for secure password storage
- **Rate Limiting:** Prevent API abuse and DDoS attacks
- **Input Validation:** Sanitize and validate all inputs
- **CORS Configuration:** Cross-origin resource sharing setup

### Submission:
Secure API with authentication, validation, and comprehensive error handling.

### Extension:
Implement OAuth integration and role-based access control (RBAC).

---

## Lab Exercise 3: Real-time Communication with WebSockets

### Learning Objectives:
- Understand WebSocket protocol and real-time communication
- Implement Socket.IO for bidirectional communication
- Create real-time features like chat and notifications
- Handle connection management and error scenarios

### Instructions:
1. **Socket.IO Setup**
   ```javascript
   const express = require('express');
   const http = require('http');
   const socketIo = require('socket.io');
   
   const app = express();
   const server = http.createServer(app);
   const io = socketIo(server, {
     cors: {
       origin: "http://localhost:3000",
       methods: ["GET", "POST"]
     }
   });
   
   // Socket connection handling
   io.on('connection', (socket) => {
     console.log(`User connected: ${socket.id}`);
     
     // Handle user joining a room
     socket.on('join-room', (roomId, userId) => {
       socket.join(roomId);
       socket.to(roomId).emit('user-joined', {
         userId,
         message: `${userId} joined the room`
       });
     });
     
     // Handle chat messages
     socket.on('send-message', (data) => {
       const { roomId, message, userId, timestamp } = data;
       
       // Broadcast message to room
       io.to(roomId).emit('receive-message', {
         userId,
         message,
         timestamp: timestamp || new Date().toISOString()
       });
       
       // Save message to database
       saveMessage(roomId, userId, message);
     });
     
     // Handle disconnection
     socket.on('disconnect', () => {
       console.log(`User disconnected: ${socket.id}`);
     });
   });
   ```

2. **Real-time Chat Application**
   ```javascript
   // Client-side Socket.IO implementation
   const socket = io('http://localhost:3001');
   
   // Join a chat room
   function joinRoom(roomId, username) {
     socket.emit('join-room', roomId, username);
   }
   
   // Send message
   function sendMessage(roomId, message, username) {
     socket.emit('send-message', {
       roomId,
       message,
       userId: username,
       timestamp: new Date().toISOString()
     });
   }
   
   // Listen for incoming messages
   socket.on('receive-message', (data) => {
     displayMessage(data);
   });
   
   // Handle connection events
   socket.on('user-joined', (data) => {
     displayNotification(data.message);
   });
   ```

3. **Advanced Real-time Features**
   ```javascript
   // Typing indicators
   socket.on('typing-start', (data) => {
     socket.to(data.roomId).emit('user-typing', {
       userId: data.userId,
       isTyping: true
     });
   });
   
   // File sharing
   socket.on('file-upload', (data) => {
     const { roomId, file, userId } = data;
     
     // Process file upload
     processFileUpload(file).then((fileUrl) => {
       io.to(roomId).emit('file-shared', {
         userId,
         fileUrl,
         fileName: file.name,
         fileType: file.type,
         timestamp: new Date().toISOString()
       });
     });
   });
   
   // Live notifications
   socket.on('send-notification', (data) => {
     const { targetUserId, notification } = data;
     
     // Send to specific user
     socket.to(targetUserId).emit('receive-notification', {
       type: notification.type,
       message: notification.message,
       timestamp: new Date().toISOString()
     });
   });
   ```

### Real-time Features:
- **Chat Systems:** Multi-room chat with message history
- **Live Notifications:** Real-time user notifications
- **Collaborative Editing:** Shared document editing
- **Live Updates:** Real-time data synchronization
- **Presence Indicators:** Online/offline status tracking

### Submission:
Complete real-time application with chat functionality and live updates.

### Extension:
Implement message encryption and voice/video call features.

---

## Lab Exercise 4: MVC Architecture Implementation

### Learning Objectives:
- Implement proper MVC separation of concerns
- Create reusable and maintainable code structure
- Design scalable application architecture
- Apply design patterns in backend development

### Instructions:
1. **MVC Structure Setup**
   ```
   mvc-api-project/
   ├── controllers/
   │   ├── authController.js
   │   ├── userController.js
   │   └── postController.js
   ├── models/
   │   ├── User.js
   │   ├── Post.js
   │   └── Comment.js
   ├── views/
   │   ├── templates/
   │   └── helpers/
   ├── routes/
   │   ├── authRoutes.js
   │   ├── userRoutes.js
   │   └── postRoutes.js
   ├── middleware/
   │   ├── auth.js
   │   ├── validation.js
   │   └── errorHandler.js
   ├── services/
   │   ├── emailService.js
   │   ├── storageService.js
   │   └── cacheService.js
   ├── utils/
   │   ├── database.js
   │   ├── logger.js
   │   └── helpers.js
   └── app.js
   ```

2. **Model Implementation**
   ```javascript
   // models/Post.js
   class Post {
     constructor(data) {
       this.id = data.id;
       this.title = data.title;
       this.content = data.content;
       this.authorId = data.authorId;
       this.createdAt = data.createdAt || new Date();
       this.updatedAt = data.updatedAt || new Date();
     }
     
     static async create(postData) {
       const post = new Post(postData);
       const result = await db.query(
         'INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)',
         [post.title, post.content, post.authorId]
       );
       post.id = result.insertId;
       return post;
     }
     
     static async findById(id) {
       const result = await db.query(
         'SELECT * FROM posts WHERE id = ?',
         [id]
       );
       return result.length ? new Post(result[0]) : null;
     }
     
     static async findAll(filters = {}) {
       let query = 'SELECT * FROM posts';
       const params = [];
       
       if (filters.authorId) {
         query += ' WHERE author_id = ?';
         params.push(filters.authorId);
       }
       
       const results = await db.query(query, params);
       return results.map(row => new Post(row));
     }
     
     async save() {
       this.updatedAt = new Date();
       await db.query(
         'UPDATE posts SET title = ?, content = ?, updated_at = ? WHERE id = ?',
         [this.title, this.content, this.updatedAt, this.id]
       );
       return this;
     }
     
     async delete() {
       await db.query('DELETE FROM posts WHERE id = ?', [this.id]);
       return true;
     }
   }
   ```

3. **Controller Implementation**
   ```javascript
   // controllers/postController.js
   const Post = require('../models/Post');
   const { validationResult } = require('express-validator');
   
   class PostController {
     static async getAllPosts(req, res) {
       try {
         const { page = 1, limit = 10, authorId } = req.query;
         const offset = (page - 1) * limit;
         
         const filters = {};
         if (authorId) filters.authorId = authorId;
         
         const posts = await Post.findAll(filters);
         const totalPosts = await Post.count(filters);
         
         res.json({
           success: true,
           data: {
             posts: posts.slice(offset, offset + parseInt(limit)),
             pagination: {
               page: parseInt(page),
               limit: parseInt(limit),
               total: totalPosts,
               totalPages: Math.ceil(totalPosts / limit)
             }
           },
           message: 'Posts retrieved successfully'
         });
       } catch (error) {
         res.status(500).json({
           success: false,
           message: 'Failed to retrieve posts',
           error: error.message
         });
       }
     }
     
     static async createPost(req, res) {
       try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
           return res.status(400).json({
             success: false,
             message: 'Validation failed',
             errors: errors.array()
           });
         }
         
         const postData = {
           ...req.body,
           authorId: req.user.userId
         };
         
         const post = await Post.create(postData);
         
         res.status(201).json({
           success: true,
           data: { post },
           message: 'Post created successfully'
         });
       } catch (error) {
         res.status(500).json({
           success: false,
           message: 'Failed to create post',
           error: error.message
         });
       }
     }
   }
   
   module.exports = PostController;
   ```

4. **Route Organization**
   ```javascript
   // routes/postRoutes.js
   const express = require('express');
   const PostController = require('../controllers/postController');
   const auth = require('../middleware/auth');
   const { postValidation } = require('../middleware/validation');
   
   const router = express.Router();
   
   router.get('/', PostController.getAllPosts);
   router.get('/:id', PostController.getPostById);
   router.post('/', auth, postValidation, PostController.createPost);
   router.put('/:id', auth, postValidation, PostController.updatePost);
   router.delete('/:id', auth, PostController.deletePost);
   
   module.exports = router;
   ```

### MVC Benefits:
- **Separation of Concerns:** Clear responsibility boundaries
- **Maintainability:** Easier to modify and extend
- **Testability:** Individual components can be tested separately
- **Reusability:** Models and controllers can be reused
- **Scalability:** Better organization for large applications

### Submission:
Complete MVC application with proper architecture and separation of concerns.

### Extension:
Implement dependency injection and repository pattern for better testability.

---

## Lab Exercise 5: API Testing and Documentation

### Learning Objectives:
- Create comprehensive API tests
- Generate automatic API documentation
- Implement monitoring and logging
- Deploy APIs with proper DevOps practices

### Instructions:
1. **API Testing with Jest**
   ```javascript
   // tests/api/posts.test.js
   const request = require('supertest');
   const app = require('../../app');
   const db = require('../../utils/database');
   
   describe('Posts API', () => {
     let authToken;
     let userId;
     
     beforeAll(async () => {
       // Setup test database
       await db.migrate();
       
       // Create test user and get auth token
       const userResponse = await request(app)
         .post('/api/v1/auth/register')
         .send({
           email: 'test@example.com',
           password: 'testpassword123',
           name: 'Test User'
         });
         
       authToken = userResponse.body.data.token;
       userId = userResponse.body.data.user.id;
     });
     
     afterAll(async () => {
       await db.cleanup();
     });
     
     describe('GET /api/v1/posts', () => {
       test('should return all posts', async () => {
         const response = await request(app)
           .get('/api/v1/posts')
           .expect(200);
           
         expect(response.body.success).toBe(true);
         expect(response.body.data).toHaveProperty('posts');
         expect(response.body.data).toHaveProperty('pagination');
       });
       
       test('should handle pagination correctly', async () => {
         const response = await request(app)
           .get('/api/v1/posts?page=1&limit=5')
           .expect(200);
           
         expect(response.body.data.pagination.page).toBe(1);
         expect(response.body.data.pagination.limit).toBe(5);
       });
     });
     
     describe('POST /api/v1/posts', () => {
       test('should create a new post with valid data', async () => {
         const postData = {
           title: 'Test Post Title',
           content: 'This is test post content',
           category: 'tech'
         };
         
         const response = await request(app)
           .post('/api/v1/posts')
           .set('Authorization', `Bearer ${authToken}`)
           .send(postData)
           .expect(201);
           
         expect(response.body.success).toBe(true);
         expect(response.body.data.post.title).toBe(postData.title);
       });
       
       test('should reject post creation without authentication', async () => {
         const postData = {
           title: 'Test Post Title',
           content: 'This is test post content'
         };
         
         await request(app)
           .post('/api/v1/posts')
           .send(postData)
           .expect(401);
       });
     });
   });
   ```

2. **Swagger Documentation**
   ```javascript
   // swagger.js
   const swaggerJsdoc = require('swagger-jsdoc');
   const swaggerUi = require('swagger-ui-express');
   
   const options = {
     definition: {
       openapi: '3.0.0',
       info: {
         title: 'Blog API',
         version: '1.0.0',
         description: 'A comprehensive blog API with authentication',
       },
       servers: [
         {
           url: 'http://localhost:3000/api/v1',
           description: 'Development server',
         },
       ],
     },
     apis: ['./routes/*.js'], // paths to files containing OpenAPI definitions
   };
   
   const specs = swaggerJsdoc(options);
   
   module.exports = { specs, swaggerUi };
   
   /**
    * @swagger
    * components:
    *   schemas:
    *     Post:
    *       type: object
    *       required:
    *         - title
    *         - content
    *       properties:
    *         id:
    *           type: integer
    *           description: The auto-generated id of the post
    *         title:
    *           type: string
    *           description: The post title
    *         content:
    *           type: string
    *           description: The post content
    *         authorId:
    *           type: integer
    *           description: The author's id
    *         createdAt:
    *           type: string
    *           format: date-time
    *           description: The post creation timestamp
    *       example:
    *         id: 1
    *         title: "My First Blog Post"
    *         content: "This is the content of my first blog post"
    *         authorId: 1
    *         createdAt: "2024-01-15T10:30:00Z"
    */
   
   /**
    * @swagger
    * /posts:
    *   get:
    *     summary: Get all posts
    *     tags: [Posts]
    *     parameters:
    *       - in: query
    *         name: page
    *         schema:
    *           type: integer
    *           default: 1
    *         description: Page number
    *       - in: query
    *         name: limit
    *         schema:
    *           type: integer
    *           default: 10
    *         description: Number of posts per page
    *     responses:
    *       200:
    *         description: List of posts retrieved successfully
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 success:
    *                   type: boolean
    *                 data:
    *                   type: object
    *                   properties:
    *                     posts:
    *                       type: array
    *                       items:
    *                         $ref: '#/components/schemas/Post'
    */
   ```

3. **Performance Monitoring**
   ```javascript
   // middleware/monitoring.js
   const prometheus = require('prom-client');
   
   // Create metrics
   const httpRequestDuration = new prometheus.Histogram({
     name: 'http_request_duration_seconds',
     help: 'Duration of HTTP requests in seconds',
     labelNames: ['method', 'route', 'status_code']
   });
   
   const httpRequestsTotal = new prometheus.Counter({
     name: 'http_requests_total',
     help: 'Total number of HTTP requests',
     labelNames: ['method', 'route', 'status_code']
   });
   
   const monitoringMiddleware = (req, res, next) => {
     const start = Date.now();
     
     res.on('finish', () => {
       const duration = (Date.now() - start) / 1000;
       const route = req.route ? req.route.path : req.path;
       
       httpRequestDuration
         .labels(req.method, route, res.statusCode)
         .observe(duration);
         
       httpRequestsTotal
         .labels(req.method, route, res.statusCode)
         .inc();
     });
     
     next();
   };
   
   module.exports = { monitoringMiddleware, prometheus };
   ```

### Testing Strategy:
- **Unit Tests:** Individual function testing
- **Integration Tests:** API endpoint testing
- **Load Tests:** Performance under stress
- **Security Tests:** Vulnerability scanning

### Submission:
Complete API with tests, documentation, and monitoring implementation.

### Extension:
Implement CI/CD pipeline with automated testing and deployment.

---

## Assessment Criteria

### Technical Implementation
- **API Design (25%):** RESTful principles, proper HTTP methods and status codes
- **Real-time Features (25%):** WebSocket implementation and event handling
- **Architecture (25%):** MVC pattern implementation and code organization
- **Testing & Documentation (25%):** Comprehensive tests and API documentation

### Advanced Development Skills
- **Security Implementation:** Authentication, authorization, input validation
- **Performance Optimization:** Caching, rate limiting, query optimization
- **Error Handling:** Comprehensive error management and logging
- **Code Quality:** Clean code, design patterns, maintainability

### Professional Development
- **Documentation:** Clear API documentation and code comments
- **Testing Strategy:** Unit, integration, and load testing
- **Monitoring:** Performance metrics and application health
- **Deployment:** Production-ready configuration and DevOps practices

## Getting Started

1. **Environment Setup**
   ```bash
   # Initialize new Node.js project
   npm init -y
   
   # Install core dependencies
   npm install express socket.io jsonwebtoken bcrypt
   npm install express-validator express-rate-limit cors helmet
   
   # Install development dependencies
   npm install --save-dev jest supertest nodemon
   npm install swagger-jsdoc swagger-ui-express
   
   # Install monitoring tools
   npm install prom-client winston morgan
   ```

2. **Development Tools**
   - **API Testing:** Postman, Insomnia, or Thunder Client
   - **Database Tools:** MongoDB Compass, MySQL Workbench
   - **Documentation:** Swagger UI, Postman Documentation
   - **Monitoring:** Prometheus, Grafana, or Application Insights

3. **Project Structure Setup**
   ```bash
   mkdir api-project && cd api-project
   mkdir controllers models routes middleware services utils tests
   touch app.js server.js
   ```

## Key Learning Outcomes

### API Development Mastery
- Design and implement production-ready RESTful APIs
- Handle authentication, authorization, and security concerns
- Create comprehensive API documentation and testing strategies

### Real-time Application Development
- Build real-time features using WebSockets and Socket.IO
- Implement event-driven architecture patterns
- Handle connection management and error scenarios

### Software Architecture
- Apply MVC architectural patterns effectively
- Create maintainable and scalable code structures
- Implement proper separation of concerns

### Professional Development Practices
- Write comprehensive tests for APIs and real-time features
- Implement monitoring and logging for production applications
- Deploy applications with proper DevOps practices

## Troubleshooting

### Common Issues:
- **CORS Errors:** Configure proper cross-origin settings
- **Authentication Problems:** Verify JWT token handling and middleware
- **WebSocket Connection Issues:** Check Socket.IO configuration and client setup
- **Performance Problems:** Implement proper caching and rate limiting

### Best Practices:
- Always validate and sanitize input data
- Implement proper error handling and logging
- Use environment variables for configuration
- Follow RESTful API design principles
- Test all endpoints thoroughly
- Document APIs comprehensively
- Monitor application performance and health
- Implement proper security measures

---

*This module prepares you for building enterprise-level APIs and real-time applications with professional development practices.*