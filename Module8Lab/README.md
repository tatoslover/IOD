# Module 8 Lab Exercises

This repository contains lab exercises for Module 8, covering database fundamentals, database design principles, and hands-on experience with MongoDB, MySQL, and Redis databases.

## Overview

The Module 8 lab exercises progress from basic database concepts to advanced database operations across multiple database technologies. Each exercise builds upon previous concepts while introducing new skills essential for modern full-stack development and data management.

## Skills Developed

- **Database Fundamentals:** Database design principles, normalization, relationships
- **NoSQL Databases:** MongoDB document-based operations and aggregation
- **Relational Databases:** MySQL table design, SQL queries, joins, transactions
- **In-Memory Databases:** Redis caching, data structures, session management
- **Database Design:** Entity-relationship modeling, schema optimization
- **Data Modeling:** Document vs relational data modeling approaches
- **Performance Optimization:** Indexing, query optimization, caching strategies
- **Database Administration:** User management, backup strategies, security

## Software Engineering
### Module 8 - Lab Exercises

Welcome to Module 8 of the IOD Software Engineering course!

This module focuses on database technologies that form the backbone of modern web applications. You'll learn to work with different types of databases, understand when to use each one, and master the skills needed to design efficient data storage solutions.

---

## Lab Exercise 1: Database Design Fundamentals

### Learning Objectives:
- Understand database design principles and normalization
- Create entity-relationship diagrams (ERDs)
- Design efficient database schemas
- Apply ACID properties in database transactions

### Instructions:
1. **Database Design Theory**
   - Study the principles of database normalization (1NF, 2NF, 3NF)
   - Learn about entity-relationship modeling
   - Understand ACID properties and database transactions

2. **Design Exercise**
   - Create an ERD for an e-commerce application
   - Include entities: Users, Products, Orders, Categories, Reviews
   - Define relationships and cardinalities
   - Normalize the design to 3NF

3. **Schema Planning**
   - Plan table structures for both SQL and NoSQL approaches
   - Consider indexing strategies
   - Document your design decisions

### Key Concepts Covered:
- Database normalization and denormalization
- Primary keys, foreign keys, and constraints
- One-to-many and many-to-many relationships
- Index design and performance considerations

### Submission:
Create a comprehensive database design document with ERDs and schema definitions.

### Extension:
Research and compare different database design patterns for web applications.

---

## Lab Exercise 2: MongoDB Fundamentals

### Learning Objectives:
- Set up and configure MongoDB
- Perform CRUD operations with MongoDB
- Understand document-based data modeling
- Work with MongoDB collections and indexes

### Instructions:
1. **MongoDB Setup**
   ```bash
   # Install MongoDB Community Edition
   # For macOS using Homebrew:
   brew tap mongodb/brew
   brew install mongodb-community
   
   # Start MongoDB service
   brew services start mongodb-community
   
   # Connect to MongoDB shell
   mongosh
   ```

2. **Basic Operations**
   - Create a database for a library management system
   - Insert documents for books, authors, and members
   - Practice find queries with various filters
   - Update and delete documents

3. **Advanced Queries**
   - Use aggregation pipelines for complex data analysis
   - Implement text search functionality
   - Work with embedded documents and arrays
   - Create and use indexes for performance optimization

### Sample Data Structure:
```javascript
// Books Collection
{
  _id: ObjectId("..."),
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "978-0-7432-7356-5",
  publishYear: 1925,
  genre: ["Fiction", "Classic"],
  availability: {
    total: 5,
    borrowed: 2,
    available: 3
  },
  reviews: [
    {
      memberId: ObjectId("..."),
      rating: 5,
      comment: "A masterpiece of American literature",
      date: ISODate("2024-01-15")
    }
  ]
}
```

### Key MongoDB Operations:
- `insertOne()`, `insertMany()` - Adding documents
- `find()`, `findOne()` - Querying data
- `updateOne()`, `updateMany()` - Modifying documents
- `deleteOne()`, `deleteMany()` - Removing documents
- `aggregate()` - Complex data processing

### Submission:
Complete MongoDB operations script with CRUD examples and aggregation queries.

### Extension:
Implement MongoDB replica sets and explore sharding concepts.

---

## Lab Exercise 3: MySQL Relational Database Operations

### Learning Objectives:
- Set up and configure MySQL database
- Design and create relational database tables
- Master SQL queries, joins, and transactions
- Implement stored procedures and triggers

### Instructions:
1. **MySQL Setup**
   ```bash
   # Install MySQL Community Server
   # For macOS using Homebrew:
   brew install mysql
   
   # Start MySQL service
   brew services start mysql
   
   # Connect to MySQL
   mysql -u root -p
   ```

2. **Database Creation**
   ```sql
   -- Create library database
   CREATE DATABASE library_management;
   USE library_management;
   
   -- Create tables with proper relationships
   CREATE TABLE authors (
       author_id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(50) NOT NULL,
       last_name VARCHAR(50) NOT NULL,
       birth_date DATE,
       nationality VARCHAR(50)
   );
   
   CREATE TABLE books (
       book_id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(200) NOT NULL,
       isbn VARCHAR(17) UNIQUE,
       author_id INT,
       publication_year YEAR,
       genre VARCHAR(50),
       copies_total INT DEFAULT 1,
       copies_available INT DEFAULT 1,
       FOREIGN KEY (author_id) REFERENCES authors(author_id)
   );
   ```

3. **Advanced SQL Operations**
   - Complex JOIN queries across multiple tables
   - Subqueries and window functions
   - Stored procedures for business logic
   - Triggers for data integrity
   - Transaction management with COMMIT/ROLLBACK

### Key SQL Concepts:
- **Data Definition Language (DDL):** CREATE, ALTER, DROP
- **Data Manipulation Language (DML):** SELECT, INSERT, UPDATE, DELETE
- **Data Control Language (DCL):** GRANT, REVOKE
- **Transaction Control:** BEGIN, COMMIT, ROLLBACK

### Sample Complex Query:
```sql
-- Find authors with most borrowed books in the last year
SELECT 
    a.first_name,
    a.last_name,
    COUNT(br.borrow_id) as total_borrows,
    AVG(DATEDIFF(br.return_date, br.borrow_date)) as avg_borrow_days
FROM authors a
JOIN books b ON a.author_id = b.author_id
JOIN borrows br ON b.book_id = br.book_id
WHERE br.borrow_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY a.author_id, a.first_name, a.last_name
HAVING total_borrows > 5
ORDER BY total_borrows DESC;
```

### Submission:
Complete SQL script with table creation, data insertion, and complex queries.

### Extension:
Implement database optimization techniques and performance tuning.

---

## Lab Exercise 4: Redis In-Memory Database

### Learning Objectives:
- Understand Redis data structures and use cases
- Implement caching strategies with Redis
- Work with Redis pub/sub messaging
- Integrate Redis with web applications

### Instructions:
1. **Redis Setup**
   ```bash
   # Install Redis
   # For macOS using Homebrew:
   brew install redis
   
   # Start Redis server
   brew services start redis
   
   # Connect to Redis CLI
   redis-cli
   ```

2. **Redis Data Structures**
   ```redis
   # Strings
   SET user:1001:name "John Doe"
   GET user:1001:name
   INCR page:views:homepage
   
   # Hashes
   HSET user:1001 name "John Doe" email "john@example.com" age 30
   HGETALL user:1001
   
   # Lists
   LPUSH notifications:user:1001 "New message received"
   LRANGE notifications:user:1001 0 -1
   
   # Sets
   SADD user:1001:interests "programming" "music" "travel"
   SMEMBERS user:1001:interests
   
   # Sorted Sets
   ZADD leaderboard 1500 "player1" 1200 "player2" 1800 "player3"
   ZRANGE leaderboard 0 -1 WITHSCORES
   ```

3. **Caching Implementation**
   - Implement cache-aside pattern
   - Set up automatic cache expiration
   - Create cache warming strategies
   - Monitor cache hit/miss ratios

4. **Session Management**
   - Store user sessions in Redis
   - Implement session expiration
   - Handle distributed sessions

### Redis Use Cases:
- **Caching:** Frequently accessed data
- **Session Storage:** User authentication states
- **Real-time Analytics:** Counters and statistics
- **Message Queues:** Pub/sub messaging
- **Rate Limiting:** API throttling

### Node.js Integration Example:
```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache implementation
async function getCachedData(key) {
    try {
        const cached = await client.get(key);
        if (cached) {
            return JSON.parse(cached);
        }
        
        // Fetch from database if not cached
        const data = await fetchFromDatabase(key);
        
        // Cache for 1 hour
        await client.setex(key, 3600, JSON.stringify(data));
        
        return data;
    } catch (error) {
        console.error('Cache error:', error);
        return await fetchFromDatabase(key);
    }
}
```

### Submission:
Complete Redis implementation with caching examples and performance comparisons.

### Extension:
Explore Redis Cluster setup and high availability configurations.

---

## Lab Exercise 5: Database Integration Project

### Learning Objectives:
- Integrate multiple database technologies in one application
- Implement polyglot persistence patterns
- Design efficient data access layers
- Compare database performance characteristics

### Instructions:
1. **Multi-Database Architecture**
   - Use MySQL for transactional data (users, orders)
   - Use MongoDB for content management (articles, comments)
   - Use Redis for caching and sessions
   - Create a unified API layer

2. **Data Access Layer**
   ```javascript
   class DatabaseManager {
       constructor() {
           this.mysql = new MySQLConnection();
           this.mongodb = new MongoClient();
           this.redis = new RedisClient();
       }
       
       async getUser(userId) {
           // Try cache first
           const cached = await this.redis.get(`user:${userId}`);
           if (cached) return JSON.parse(cached);
           
           // Fetch from MySQL
           const user = await this.mysql.query(
               'SELECT * FROM users WHERE id = ?', 
               [userId]
           );
           
           // Cache for future requests
           await this.redis.setex(
               `user:${userId}`, 
               3600, 
               JSON.stringify(user)
           );
           
           return user;
       }
   }
   ```

3. **Performance Testing**
   - Benchmark read/write operations across databases
   - Test caching effectiveness
   - Measure query performance under load
   - Document optimization strategies

### Project Structure:
```
database-integration-project/
├── config/
│   ├── mysql.js
│   ├── mongodb.js
│   └── redis.js
├── models/
│   ├── User.js
│   ├── Article.js
│   └── Session.js
├── services/
│   ├── DatabaseManager.js
│   ├── CacheService.js
│   └── PerformanceMonitor.js
├── tests/
│   ├── integration.test.js
│   └── performance.test.js
└── app.js
```

### Submission:
Complete multi-database application with performance analysis report.

### Extension:
Implement database migration scripts and backup strategies.

---

## Assessment Criteria

### Technical Implementation
- **Database Design (25%):** Proper normalization, efficient schema design
- **Query Optimization (25%):** Efficient queries, proper indexing strategies
- **Integration Skills (25%):** Successful multi-database implementation
- **Performance Analysis (25%):** Benchmarking and optimization techniques

### Database Mastery
- **SQL Proficiency:** Complex queries, joins, stored procedures
- **NoSQL Understanding:** Document modeling, aggregation pipelines
- **Caching Strategies:** Effective use of Redis for performance
- **Data Integrity:** Proper constraints, transactions, error handling

### Professional Development
- **Documentation:** Clear database schemas and API documentation
- **Testing:** Comprehensive database testing strategies
- **Security:** Database security best practices
- **Monitoring:** Performance monitoring and alerting

## Getting Started

1. **Environment Setup**
   ```bash
   # Install database servers
   brew install mongodb-community mysql redis
   
   # Start services
   brew services start mongodb-community
   brew services start mysql
   brew services start redis
   
   # Install Node.js dependencies
   npm install mongodb mysql2 redis
   ```

2. **Database Clients**
   - **MongoDB:** MongoDB Compass (GUI) or mongosh (CLI)
   - **MySQL:** MySQL Workbench (GUI) or mysql (CLI)
   - **Redis:** RedisInsight (GUI) or redis-cli (CLI)

3. **Development Tools**
   - Database modeling tools (draw.io, Lucidchart)
   - SQL clients and query builders
   - Performance monitoring tools

## Key Learning Outcomes

### Database Fundamentals Mastery
- Design efficient database schemas using normalization principles
- Understand trade-offs between different database technologies
- Implement proper indexing and optimization strategies

### Multi-Database Architecture
- Choose appropriate database technologies for specific use cases
- Implement polyglot persistence patterns
- Create unified data access layers

### Performance Optimization
- Optimize database queries for better performance
- Implement effective caching strategies
- Monitor and analyze database performance metrics

### Production Readiness
- Implement database security best practices
- Design backup and recovery strategies
- Handle database scaling and high availability

## Troubleshooting

### Common Issues:
- **Connection Problems:** Check service status and configuration
- **Performance Issues:** Analyze query execution plans and indexing
- **Data Consistency:** Implement proper transaction management
- **Memory Usage:** Monitor and optimize Redis memory consumption

### Best Practices:
- Always use parameterized queries to prevent SQL injection
- Implement proper error handling and connection pooling
- Regular database maintenance and optimization
- Monitor database performance metrics continuously
- Use appropriate data types and constraints
- Implement proper backup and recovery procedures

---

*This module provides the foundation for building scalable, data-driven applications with multiple database technologies.*