const { number, required } = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authorId: {
      type: Number,
      ref: "Author",
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    publicationYear: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
