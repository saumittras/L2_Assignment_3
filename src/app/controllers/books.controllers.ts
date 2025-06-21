import express, { Request, Response } from "express";
import { Book } from "../model/books.model";

export const booksRoutes = express.Router();

booksRoutes.post("/", async (req: Request, res: Response, next) => {
  try {
    const body = req.body;
    const data = await Book.create(body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

booksRoutes.get("/", async (req: Request, res: Response, next) => {
  const { filter, sortBy, sort, limit = "10" } = req.query;

  const query: Record<string, unknown> = {};
  try {
    if (filter) {
      query.genre = (filter as string).toUpperCase();
    }
    const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === "asc" ? 1 : -1 })
      .limit(parseInt(limit as string));

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
});

booksRoutes.get("/:bookId", async (req: Request, res: Response, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);

    let message;
    if (book === null) {
      message = "Book Not Found";
    } else {
      message = "Book retrieved successfully";
    }
    res.status(201).json({
      success: true,
      message: message,
      data: book,
    });
  } catch (error) {
    next(error);
  }
});

booksRoutes.put("/:bookId", async (req: Request, res: Response, next) => {
  try {
    const bookId = req.params.bookId;
    const updateData = req.body;
    const book = await Book.findByIdAndUpdate(bookId, updateData, {
      new: true,
    });

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
});

booksRoutes.delete("/:bookId", async (req: Request, res: Response, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.deleteOne({ _id: bookId }, { new: true });
    const book1 = await Book.findById(bookId);

    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: book1,
    });
  } catch (error) {
    next(error);
  }
});
