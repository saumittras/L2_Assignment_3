# 📚 Library Management System Backend

This is a backend server built with **Express**, **TypeScript**, **Mongoose**, and **MongoDB** to manage a library system. It supports features like managing books, borrowing books, and validation with centralized error handling.

---

## 🚀 Features

- CRUD operations for books and borrowings
- Validation with Mongoose
- Centralized global error handling
- Clean code with TypeScript interfaces
- Environment-based configuration
- RESTful API architecture

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **Dotenv**
- **ESLint + Prettier** (optional)

---

## 📁 Project Structure

src/
├── app.ts
├── server.ts
├── controllers/
│ ├── books.controller.ts
│ └── borrow.controller.ts
├── models/
│ ├── books.model.ts
│ └── borrow.model.ts
├── interfaces/
│ ├── book.interface.ts
│ ├── borrow.interface.ts
│ └── error.interface.ts
├── errors/
│ ├── apiError.ts
│ └── handleValidationError.ts
├── middlewares/
│ └── globalErrorHandler.ts
└── routes/
├── books.route.ts
└── borrow.route.ts

---

## 📦 Installation

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-backend.git
cd library-management-backend

```
