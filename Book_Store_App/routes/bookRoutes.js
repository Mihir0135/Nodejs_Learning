const bookModel = require("../models/bookModel");
const express = require("express");
const { validateBook } = require("../middlewares/validateData");
const router = express.Router();

const bookList = bookModel?.getBooks();

router.get("/books", (req, res) => {
  res.status(200).send(bookList);
});

router.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const reqBook = bookList.find((book) => book?.id === parseInt(bookId));
  if (!reqBook) return res.status(404).json({ error: "Book not found" });
  res.json(reqBook);
});

router.post("/books", validateBook, (req, res) => {
  const newBook = { id: bookList?.length + 1, ...req.body };
  bookModel.addBook(newBook);
  res.status(201).json({
    status: 201,
    message: "Book Added SuccessFully",
  });
});

router.put("/books/:id", validateBook, (req, res) => {
  const bookId = req.params.id;
  const bookRes = bookModel.updateBook(req.body, bookId);
  if (bookRes === "error")
    return res.status(404).json({ error: "Book not found" });

  res.status(200).json({
    status: 200,
    successMessage: bookRes,
  });
});

router.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const bookRes = bookModel.deleteBook(bookId);
  if (bookRes === "error")
    return res.status(404).json({ error: "Book not found" });
  res.status(204).end();
});

module.exports = router;
