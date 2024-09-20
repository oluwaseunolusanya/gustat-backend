# Backend App
Backend application for Gustat Food ordering app. It is built with Node.js, Express, and MongoDB, designed to manage user accounts and restaurant listings. It also supports image uploads for restaurant profiles via Cloudinary and user authentication using Auth0.

## **Table of Contents**

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Error Handling](#error-handling)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Features**

- **User Management**: Create, update, and retrieve user profiles.
- **Restaurant Management**: Create a restaurant listing with image uploads.
- **Image Uploads**: Upload and manage restaurant profile images via Cloudinary.
- **Authentication**: Auth0-based authentication using JWT tokens.
- **Data Validation**: Middleware for request validation using `express-validator`.

---

## **Tech Stack**

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database to store user and restaurant data.
- **Mongoose**: ODM for MongoDB, used to define schemas and models.
- **Cloudinary**: Cloud service for image uploads.
- **Auth0**: JWT-based authentication for secure user access.
- **Express Validator**: Middleware for validating request data.
- **Multer**: Middleware for handling file uploads.
- **Render**: Deployed to Render at [https://gustat-backend.onrender.com](https://gustat-backend.onrender.com/)

---

## **Installation**

1. Clone the repository:

    ```bash
    git clone https://github.com/oluwaseunolusanya/gustat-backend.git
    ```

2. Change into the project directory:

    ```bash
    cd gustat-backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

---

## **Environment Variables**

Before starting the project, you'll need to set up a `.env` file in the project root and define the following variables:

```bash
# MongoDB connection string
MONGODB_CONNECTION_STRING=<your-mongodb-connection-string>

# Cloudinary configuration for image uploads
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

# Auth0 configuration for authentication
AUTH0_AUDIENCE=<your-auth0-audience>
AUTH0_ISSUER_BASE_URL=<your-auth0-issuer-base-url>

# Local host port
PORT=5000
```

> Ensure that you have a valid MongoDB instance, Cloudinary account, and Auth0 credentials to use these services.

---

## **Usage**

1. **Run the application locally**:

    After setting up the environment variables, you can start the development server:

    ```bash
    npm run dev
    ```

    The API will be running on `http://localhost:5000`.

2. **Build and Run for production**:

    If you want to run the application in production:

    ```bash
    npm run build
    npm start
    ```

---

## **API Endpoints**

### **User Routes**

1. **GET /api/my/user**

    - **Description**: Get the current user's profile.
    - **Auth**: Requires a valid JWT token.
    - **Response**: Returns user details.

2. **POST /api/my/user**

    - **Description**: Create a new user.
    - **Auth**: Requires a valid JWT token.
    - **Request Body**: `{ "auth0Id": "<auth0_id>", "email": "<user_email>", ... }`
    - **Response**: Returns the newly created user.

3. **PUT /api/my/user**

    - **Description**: Update the current user's profile.
    - **Auth**: Requires a valid JWT token.
    - **Request Body**: `{ "name": "<name>", "city": "<city>", ... }`
    - **Response**: Returns the updated user.

### **Restaurant Routes**

1. **POST /api/my/restaurant**

    - **Description**: Create a new restaurant for the logged-in user.
    - **Auth**: Requires a valid JWT token.
    - **Request Body**: Form-data with restaurant details and an image.
    - **Response**: Returns the newly created restaurant.

---

## **Error Handling**

Errors are handled with proper HTTP status codes and descriptive messages. For example:

- `400 Bad Request`: If the request validation fails.
- `401 Unauthorized`: If the user is not authenticated or the JWT is invalid.
- `404 Not Found`: If a resource like a user or restaurant is not found.
- `500 Internal Server Error`: For generic server-side errors.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add a feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Contributions, issues, and feature requests are welcome!

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For further questions or issues, contact:

- **GitHub**: [oluwaseunolusanya](https://github.com/oluwaseunolusanya)
- **Email**: oluwaseun_olusanya.com
