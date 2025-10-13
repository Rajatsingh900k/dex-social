# Dex Social

A comprehensive fullstack social media platform that combines functionalities of popular platforms like `x.com` and `youtube`. The project follows professional-grade architecture and development practices.

 ---

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

 ---

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

 ---

## Client-Server Model

### Overview
The client-server model is a distributed application structure that partitions tasks or workloads between service providers (servers) and service requesters (clients). This architecture is fundamental to networked applications, including web applications.

### Components

1. **Client**
    - The client is the end-user interface that requests services or resources from the server.
    - Clients can be web browsers, mobile applications, or any other application that communicates with a server.
    - They initiate requests and wait for responses from the server.

2. **Server**
    - The server is a powerful machine or application that provides resources, data, or services to clients.
    - It processes incoming requests, performs necessary actions, and sends back responses.
    - Servers can host databases, applications, or static files.

### Communication
- Clients and servers communicate over a network using protocols such as HTTP/HTTPS.
- The communication is typically request-response based, where the client sends a request and the server returns a response.

### Advantages
- **Scalability**: Servers can handle multiple client requests simultaneously, allowing for easy scaling.
- **Centralized Management**: Resources and data can be managed centrally on the server, simplifying updates and maintenance.
- **Resource Sharing**: Multiple clients can share resources provided by the server, optimizing resource utilization.

### Conclusion
The client-server model is essential for building efficient and scalable applications. Understanding this architecture helps developers design better systems that can handle user requests effectively.

---

## URL, URI, URN

### Overview
In web development, understanding the concepts of URL, URI, and URN is crucial for resource identification and access.

### Definitions

1. **URL (Uniform Resource Locator)**
    - A URL is a specific type of URI that provides the means to access a resource on the internet.
    - It includes the protocol (e.g., HTTP, HTTPS), domain name, and path to the resource.
    - Example: `https://www.example.com/path/to/resource`

2. **URI (Uniform Resource Identifier)**
    - A URI is a string of characters that uniquely identifies a resource.
    - It can be further classified into URLs and URNs.
    - Example: `https://www.example.com` (URL) or `urn:isbn:0451450523` (URN)

3. **URN (Uniform Resource Name)**
    - A URN is a type of URI that names a resource without specifying its location.
    - It is used for persistent identification of resources.
    - Example: `urn:isbn:0451450523` identifies a book by its ISBN.

### Conclusion
Understanding the differences between URL, URI, and URN is essential for effective resource management and access in web applications. Each serves a unique purpose in identifying and locating resources on the internet.

## HTTP Methods

### Overview
HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines a set of request methods that indicate the desired action to be performed on a resource.

### Common HTTP Methods

1. **GET**
    - **Description**: Retrieves data from a server.
    - **Use Cases**: Fetching web pages, images, or any other resources.
    - **Idempotent**: Yes (multiple identical requests have the same effect as a single request).

2. **POST**
    - **Description**: Sends data to a server to create a new resource.
    - **Use Cases**: Submitting form data, uploading files.
    - **Idempotent**: No (multiple identical requests may create multiple resources).

3. **PUT**
    - **Description**: Updates an existing resource or creates a new resource if it does not exist.
    - **Use Cases**: Updating user information, replacing a resource.
    - **Idempotent**: Yes (multiple identical requests result in the same resource state).

4. **PATCH**
    - **Description**: Partially updates an existing resource.
    - **Use Cases**: Modifying specific fields of a resource.
    - **Idempotent**: Yes (multiple identical requests result in the same resource state).

5. **DELETE**
    - **Description**: Removes a resource from the server.
    - **Use Cases**: Deleting user accounts, removing items from a list.
    - **Idempotent**: Yes (deleting the same resource multiple times has the same effect).

6. **HEAD**
    - **Description**: Similar to GET, but retrieves only the headers of a resource.
    - **Use Cases**: Checking if a resource exists, retrieving metadata.
    - **Idempotent**: Yes.

7. **OPTIONS**
    - **Description**: Describes the communication options for the target resource.
    - **Use Cases**: Discovering allowed HTTP methods for a resource.
    - **Idempotent**: Yes.

### Status Codes
Each HTTP method can return various status codes indicating the result of the request:

- **200 OK**: The request was successful.
- **201 Created**: A new resource was successfully created (for POST).
- **204 No Content**: The request was successful, but there is no content to return (for DELETE).
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required and has failed or has not yet been provided.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: The server encountered an unexpected condition.

**HyperText Transfer Protocol**  
---

## 🔹 What are HTTP Headers?

**Definition:**  
Metadata (key-value pairs) sent along with requests and responses.  

**Uses:**  
- Caching  
- Authentication  
- Managing state  

**Notes:**  
- `X-` prefix headers → Deprecated since 2012  

**Types of Headers:**
- **Request Headers** → Sent from Client  
- **Response Headers** → Sent from Server  
- **Representation Headers** → Define encoding/compression  
- **Payload Headers** → Contain actual data  

---

## 🔹 Common Headers

| Request / Response | CORS & Security Headers |
|---------------------|-------------------------|
| `Accept: application/json` | `Access-Control-Allow-Origin` |
| `User-Agent` | `Access-Control-Allow-Credentials` |
| `Authorization` | `Access-Control-Allow-Methods` |
| `Content-Type` | `Access-Control-Allow-Headers` |
| `Cookie` | `Cache-Control` |
|  | `Cross-Origin-Embedder-Policy` |
|  | `Cross-Origin-Opener-Policy` |
|  | `Content-Security-Policy` |
|  | `X-XSS-Protection` |

---

## 🔹 HTTP Methods

Basic set of operations used to interact with a server:

| Method | Description |
|---------|--------------|
| **GET** | Retrieve a resource |
| **HEAD** | Retrieve headers only (no message body) |
| **OPTIONS** | Find out available operations |
| **TRACE** | Loopback test (returns the same data) |
| **DELETE** | Remove a resource |
| **PUT** | Replace a resource |
| **POST** | Add or interact with a resource |
| **PATCH** | Modify part of a resource |

---

## 🔹 HTTP Status Codes

| Category | Description |
|-----------|--------------|
| **1xx** | Informational |
| **2xx** | Success |
| **3xx** | Redirection |
| **4xx** | Client Error |
| **5xx** | Server Error |

**Common Codes:**

| Code | Meaning |
|------|----------|
| `100` | Continue |
| `102` | Processing |
| `200` | OK |
| `201` | Created |
| `202` | Accepted |
| `307` | Temporary Redirect |
| `308` | Permanent Redirect |
| `400` | Bad Request |
| `401` | Unauthorized |
| `402` | Payment Required |
| `404` | Not Found |
| `500` | Internal Server Error |
| `507` | Gateway Timeout |

---

### Conclusion
Understanding HTTP methods is crucial for web development and API design. Each method serves a specific purpose and follows principles of RESTful architecture, ensuring efficient communication between clients and servers.