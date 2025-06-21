import { model, Schema } from "mongoose";
import { BookStaticsMethods, IBooks } from "../interface/books.interface";

const booksSchema = new Schema<IBooks, BookStaticsMethods>(
  {
    title: {
      type: String,
      required: [true, "Book title required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author name required"],
    },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      message: "Not Listed in genre",
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

booksSchema.statics.reduceCopies = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) {
    throw new Error("Book not found");
  }

  if (book.copies < quantity) {
    throw new Error("Not enough copies available");
  }

  book.copies -= quantity;

  if (book.copies === 0) {
    book.available = false;
  }

  await book.save();
  return book;
};

export const Book = model<IBooks, BookStaticsMethods>("Book", booksSchema);
