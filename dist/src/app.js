"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controllers_1 = require("./app/controllers/books.controllers");
const borrows_controllers_1 = require("./app/controllers/borrows.controllers");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/books", books_controllers_1.booksRoutes);
app.use("/api/borrow", borrows_controllers_1.borrowRoutes);
app.get("/", (req, res) => {
    const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Library Management System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom keyframe for bounce in from top */
    @layer utilities {
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
      }
    }
  </style>
</head>
<body class="bg-gray-100 font-sans text-gray-800">

  <!-- Header -->
  <header class="bg-blue-900 text-white shadow-md py-5">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold animate-bounce">📚 Library Management System</h1>
      <nav>
        <ul class="flex gap-6 text-sm md:text-base">
          <li><a href="#features" class="hover:text-yellow-300 transition">Features</a></li>
          <li><a href="#api" class="hover:text-yellow-300 transition">API Info</a></li>
          <li><a href="#contact" class="hover:text-yellow-300 transition">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-blue-800 text-white text-center py-24 px-4">
    <div class="container mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Welcome to the Library API Server</h2>
      <p class="text-lg md:text-xl mb-6 animate-fadeInUp">Manage your books, users, and borrowing records easily via a powerful REST API.</p>
      <a href="#api" class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded shadow transition-all duration-300">
        Explore API
      </a>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-12">🔍 Features</h3>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-gray-50 shadow rounded-lg hover:shadow-lg transition animate-fadeInUp">
          <h4 class="text-xl font-semibold text-blue-700 mb-2">📖 Book Management</h4>
          <p>Add, update, delete, and view books with available copy tracking.</p>
        </div>
        <div class="p-6 bg-gray-50 shadow rounded-lg hover:shadow-lg transition animate-fadeInUp">
          <h4 class="text-xl font-semibold text-blue-700 mb-2">👥 User Management</h4>
          <p>Register users, manage roles, and keep user data safe and secure.</p>
        </div>
        <div class="p-6 bg-gray-50 shadow rounded-lg hover:shadow-lg transition animate-fadeInUp">
          <h4 class="text-xl font-semibold text-blue-700 mb-2">📦 Borrowing System</h4>
          <p>Track borrowed books, return dates, and availability with ease.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- API Section -->
  <section id="api" class="py-20 bg-blue-50">
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-10">📡 API Endpoints</h3>
      <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4 text-sm md:text-base">
        <div>
          <p class="font-semibold text-blue-900">GET /api/books</p>
          <p>Retrieve all books in the library</p>
        </div>
        <div>
          <p class="font-semibold text-blue-900">POST /api/books</p>
          <p>Add a new book to the collection</p>
        </div>
        <div>
          <p class="font-semibold text-blue-900">POST /api/borrow</p>
          <p>Borrow a book with available copies</p>
        </div>
        <div>
          <p class="font-semibold text-blue-900">GET /api/summary</p>
          <p>Summary of all borrowed books by quantity</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h3 class="text-2xl font-bold mb-4">📬 Contact</h3>
      <p class="mb-2">Have questions? Reach out to us:</p>
      <p>Email: <a href="mailto:admin@libraryapi.com" class="text-blue-700 hover:underline">admin@libraryapi.com</a></p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-blue-900 text-white text-center py-4">
    <p>&copy; 2025 Library Management System API. All rights reserved.</p>
  </footer>

</body>
</html>
`;
    res.send(page);
});
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "404! Route Not Found",
    });
});
app.use(globalErrorHandler_1.default);
exports.default = app;
