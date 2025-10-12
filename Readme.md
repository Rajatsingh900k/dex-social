# Dex Social

A comprehensive fullstack social media platform that combines functionalities of popular platforms like `x.com` and `youtube`. The project follows professional-grade architecture and development practices.

## Project Architecture

### Root Directory Structure
```
dex-social/
├── node_modules/
├── public/
│   └── temp/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── utils/
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .gitkeep
├── app.js
├── constants.js
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

### Directory Details

#### Core Directories
1. **Root Directory (`dex-social/`)**
    - Main project container housing all files and directories
    - Contains configuration files like package.json for npm dependencies
    - Includes dotenv files for environment variables
    - Houses core application files like app.js and index.js

2. **Source Directory (`src/`)**
    - Central location for all application source code
    - Implements MVC (Model-View-Controller) architecture
    - Contains modular components separated by functionality
    - Houses business logic, data models, and routing logic

3. **Public Directory (`public/`)**
    - Dedicated to static file serving
    - Contains temporary file storage in `temp/` directory
    - Handles user uploads and media files
    - Serves client-accessible resources

#### Source Code Organization

1. **Controllers (`src/controllers/`)**
    - Implements RESTful API logic
    - Handles request/response cycle
    - Contains business logic for each route
    - Manages data validation and transformation

2. **Database (`src/db/`)**
    - MongoDB connection setup and configuration
    - Database indexing and optimization
    - Connection pooling management
    - Error handling for database operations

3. **Middlewares (`src/middlewares/`)**
    - JWT authentication middleware
    - Request validation using express-validator
    - Error handling middleware
    - Rate limiting and security middlewares

4. **Models (`src/models/`)**
    - Mongoose schema definitions for each entity
    - Data validation and sanitization rules
    - Pre/post hooks for data operations
    - Custom model methods and statics

5. **Routes (`src/routes/`)**
    - API endpoint definitions with versioning (v1, v2)
    - Route parameter validation
    - Route grouping by functionality
    - Authentication route protection

6. **Utils (`src/utils/`)**
    - Custom error classes
    - API response handlers
    - File upload utilities
    - Common helper functions

### Configuration Files

1. **.env**
    - Database connection strings
    - JWT secret keys and expiry times
    - API keys for third-party services
    - Environment-specific configurations

2. **.prettierrc & .prettierignore**
    - Tab width and indentation rules
    - Line length limitations
    - Quote style preferences
    - Files excluded from formatting

3. **app.js**
    - Express app initialization
    - Global middleware setup
    - Error handling configuration
    - Security headers setup

4. **constants.js**
    - Status codes and messages
    - Validation constants
    - Configuration parameters
    - System-wide enums

## Dependencies

### Development Dependencies

1. **Nodemon (^3.1.10)**
    - File watching for automatic server restart
    - Support for TypeScript and other file types
    - Custom restart delays and ignore patterns
    - Integration with environment variables

2. **Prettier (^3.6.2)**
    - Automatic code formatting
    - EditorConfig integration
    - Custom rule configuration
    - Pre-commit hook support

### Production Dependencies

1. **Express Framework (^5.1.0)**
    - HTTP server implementation
    - Middleware pipeline architecture
    - Static file serving
    - Router implementation
    - Error handling middleware

2. **Database Related**
    - **Mongoose (^8.19.1)**
        - MongoDB ORM functionality
        - Schema validation and middleware
        - Query building and execution
        - Population and virtual fields
    - **Mongoose-aggregate-paginate (^2.0.2)**
        - Cursor-based pagination
        - Aggregate pipeline support
        - Custom page size options
        - Total count calculations

3. **Security Packages**
    - **Bcrypt (^6.0.0)**
        - Password hashing with salt rounds
        - Password comparison functionality
        - Async/sync operations support
        - Salt generation utilities
    - **JsonWebToken (^9.0.2)**
        - JWT signing and verification
        - Token expiration handling
        - Custom payload support
        - Refresh token implementation

4. **Utility Packages**
    - **Cookie-parser (^1.4.7)**
        - HTTP cookie parsing
        - Signed cookie support
        - Cookie serialization
        - Security options configuration
    - **CORS (^2.8.5)**
        - Cross-origin request handling
        - Preflight request support
        - Custom origin validation
        - Header control options
    - **Dotenv (^17.2.3)**
        - Environment variable loading
        - Custom path configuration
        - Variable validation
        - Multiple environment support

Each package is selected based on security, performance, and maintainability requirements, ensuring robust functionality while following best practices.