# Dex Social

A complete fullstack project.
This app has functionality of major social media apps like ```x.com``` and ```youtube``` in a single platform.


## File Structure of professional projects.

The professional level backend structure :- 
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
├── app.js (Server & configuration)
├── constants.js
├── index.js (Entry Point)
├── package-lock.json
├── package.json
└── README.md
```
### Short Description of these directories :-

### 1. Directory Structure :-

1. ```Root directory (Dex Social here)``` :- This directory is the root directory, it contains all the backend code for the webApp, this code contains Database connection codes, node_modules, dependencies, other directories, etc.
2. ```node_modules``` :- contains node modules.
3. ```public``` :- This directory exists to store static or publicly accessible files.
4. ```public/temp ``` :- This directory stores temperary data.
5. ```src``` :- This is the main directory which contains all the application logic.
6. ```controllers``` :- Contains functions that handle requests and responses.
7. ```db``` :- Handles database connection logic.
8. ```middlewares``` :- Stores middleware functions used in Express routes. These are functions that run before the controller.
9. ```models``` :- Contains Mongoose schemas or database models.
10. ```routes``` :- Stores all your API route definitions.
11. ```utils``` :- Stores helper functions, reusable utilities, or services.

### 2. File Structure :-

1. ```.env``` :- Stores environment variables like DB credentials, API keys, and secrets.
2. ```.prettierignore``` :- Used by Prettier, a code formatter. .prettierignore contains files/folders Prettier should skip.
3. ```.gitignore``` :- Contains files and folders which must node be push to git.
4. ```.gitkeep``` :- Empty file used to force Git to track empty folders (Git normally ignores them).
5. ```app.js``` :- Defines and configures your Express app. Registers middlewares, routes, and error handlers. Usually exported to be used in index.js.
6. ```constanst.js``` :- Stores global constants used across your app.
7. ```index.js``` :- The main entry point. Starts your server and connects to the database.
8. ```package.json / package-lock.json``` :- Define your project dependencies, scripts, and metadata. package.json is editable. package-lock.json is auto-generated (locks exact dependency versions).


## Packages Used:-

1. dependencies:- 

```bash
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongoose": "^8.19.1"
    "mongoose-aggregate-paginate": "^2.0.2"
    "jsonwebtoken": "^9.0.2"
    "bcrypt": "^6.0.0"
```

2. dev-dependencies:-

```bash
    "nodemon": "^3.1.10",
    "prettier": "^3.6.2"
```

### Need of above mentioned dependencies
