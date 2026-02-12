# Get YouTube Subscribers

## 📌 Project Summary
**Get YouTube Subscribers** is a backend REST API application built using **Node.js**, **Express.js**, and **MongoDB**.  
The project demonstrates how to connect a Node.js application with MongoDB, create a database, and expose RESTful APIs to fetch subscriber data in different formats.

This project strictly follows the provided boilerplate structure and acceptance criteria.  
The application separates concerns clearly by keeping request handling, database connection, and server startup in different files.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Local)
- Mongoose

---

## 🎯 Project Objective
- Understand MongoDB integration with Node.js
- Learn REST API creation using Express
- Practice modular coding and folder structuring
- Handle errors and validations properly
- Follow industry-level backend coding standards

---

## 📂 Project Folder Structure
get-youtube-subscribers
│
├── src
│   ├── models
│   │   └── subscribers.js
│   │
│   ├── createDatabase.js
│   ├── app.js
│   └── index.js
│
├── node_modules
├── package.json
├── package-lock.json
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone or Download the Project

git clone <repository-url>

cd get-youtube-subscribers

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Start MongoDB Locally

Make sure MongoDB service is running on:
mongodb://localhost:27017
  

### 4️⃣ Create Database and Insert Sample Data
This script creates the database and inserts predefined subscriber records.
 
 
 node src/createDatabase.js

### 5️⃣ Start the Server

node src/index.js

Then Server will start at: http://localhost:3000

--- 

### 🔗 API Endpoints Documentation

✅ Get All Subscribers

GET
/subscribers
[
  {
    "_id": "695c9f39ff038c265c1dd118",
    "name": "Jeread Krus",
    "subscribedChannel": "CNET",
    "subscribedDate": "2026-01-06T05:35:53.854Z",
    "__v": 0
  }
]

✅ Get Subscribers Names & Channels
GET 
/subscribers/names

[
  {
    "name": "Jeread Krus",
    "subscribedChannel": "CNET"
  },
  {
    "name": "John Doe",
    "subscribedChannel": "freeCodeCamp.org"
  }
]

✅ Get Subscriber by ID

/subscribers/:id
/subscribers/695c9f39ff038c265c1dd118

{
  "_id": "695c9f39ff038c265c1dd118",
  "name": "Jeread Krus",
  "subscribedChannel": "CNET",
  "subscribedDate": "2026-01-06T05:35:53.854Z",
  "__v": 0
}

❌ Invalid Subscriber ID

If an invalid ID is provided:

Status Code: 400

Response:

{
  "message": "Invalid subscriber ID"
}

---

### 🧩 Architecture & Guidelines Followed

✔ app.js is used only for handling requests and responses
✔ Database connection and server startup are handled in index.js
✔ createDatabase.js is used only for database creation and seeding
✔ Modular routing using Express Router
✔ Mongoose used for MongoDB interaction
✔ Boilerplate files are not modified
✔ Proper naming conventions followed

---

### 🛑 Error Handling & Logging

Invalid MongoDB ObjectId is handled gracefully.

Proper error messages are returned with correct HTTP status codes.

Server crashes are avoided using try-catch blocks and validations.

---

### 🧪 Validation & Testing

APIs tested using browser and REST clients.

All endpoints return correct data as per acceptance criteria.

Invalid routes and IDs are handled properly.

---

### 🚀 Deployment

This project runs locally and requires MongoDB to be installed on the system.
The server is accessible at:

http://localhost:3000


### ✅ Conclusion

The Get YouTube Subscribers project successfully demonstrates the use of MongoDB with Node.js to build a clean and well-structured REST API. All required endpoints function correctly, database integration is properly handled, and the project follows the given boilerplate and acceptance criteria without modification. This project reflects a clear understanding of backend fundamentals and RESTful API design.
