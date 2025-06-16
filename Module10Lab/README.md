# Module 10 Lab Exercises

This repository contains lab exercises for Module 10, covering software deployment, containerization with Docker, CI/CD pipelines, and cloud deployment on AWS.

## Overview

Module 10 focuses on deploying applications to production environments using modern DevOps practices. Learn containerization, automated deployment pipelines, and cloud infrastructure management.

## Skills Developed

- **Containerization:** Docker containers, images, and orchestration
- **CI/CD Pipelines:** GitHub Actions for automated testing and deployment
- **Cloud Deployment:** AWS EC2, Elastic Beanstalk, and cloud services
- **Infrastructure:** Server configuration, scaling, and monitoring
- **DevOps Practices:** Automated deployment, rollback strategies, blue-green deployment

---

## Lab Exercise 1: Docker Fundamentals

### Learning Objectives:
- Create Docker containers for web applications
- Write Dockerfiles and docker-compose configurations
- Manage container lifecycles and networking

### Instructions:
1. **Dockerfile Creation**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Docker Compose Setup**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
     database:
       image: mongo:6
       ports:
         - "27017:27017"
   ```

---

## Lab Exercise 2: GitHub Actions CI/CD

### Learning Objectives:
- Set up automated testing and deployment pipelines
- Configure GitHub Actions workflows
- Implement deployment strategies

### Instructions:
1. **CI/CD Workflow**
   ```yaml
   name: Deploy to Production
   on:
     push:
       branches: [main]
   
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
         - run: npm install
         - run: npm test
   
     deploy:
       needs: test
       runs-on: ubuntu-latest
       steps:
         - name: Deploy to AWS
           run: |
             # Deployment commands
   ```

---

## Lab Exercise 3: AWS EC2 Deployment

### Learning Objectives:
- Deploy applications to AWS EC2 instances
- Configure security groups and load balancers
- Set up monitoring and logging

### Instructions:
1. **EC2 Setup**
   - Launch EC2 instance with appropriate security groups
   - Install Node.js and application dependencies
   - Configure reverse proxy with nginx

2. **Deployment Script**
   ```bash
   #!/bin/bash
   git pull origin main
   npm install --production
   pm2 restart app
   ```

---

## Lab Exercise 4: Elastic Beanstalk Deployment

### Learning Objectives:
- Use AWS Elastic Beanstalk for simplified deployment
- Configure auto-scaling and health monitoring
- Manage application versions and rollbacks

### Instructions:
1. **Beanstalk Configuration**
   - Create application and environment
   - Configure load balancing and auto-scaling
   - Set up health checks and monitoring

2. **Application Bundle**
   ```json
   {
     "name": "my-app",
     "version": "1.0.0",
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

---

## Assessment Criteria

- **Containerization (25%):** Proper Docker implementation
- **CI/CD Pipeline (25%):** Automated testing and deployment
- **Cloud Deployment (25%):** Successful AWS deployment
- **Best Practices (25%):** Security, monitoring, and documentation

## Getting Started

1. **Prerequisites**
   ```bash
   # Install Docker
   # Install AWS CLI
   # Configure GitHub repository
   ```

2. **Development Environment**
   - Docker Desktop
   - AWS Account
   - GitHub repository with Actions enabled

## Key Learning Outcomes

- Deploy applications using Docker containers
- Implement automated CI/CD pipelines
- Manage cloud infrastructure on AWS
- Apply DevOps best practices for production deployment

---

*This module prepares you for deploying and managing applications in production environments.*