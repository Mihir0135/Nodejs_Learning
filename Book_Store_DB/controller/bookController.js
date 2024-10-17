const Book = require("../models/bookModel");

const handleGetBook = async (req, res) => {
  const bookList = Book.find({});
  res.status(200).json(bookList);
};

const handleGetBookById = async (req, res) => {
  const bookItem = await Book.findById(req.params.id);

  if (bookItem.length === 0)
    res.status(404).json({ status: 404, message: "Book is not Found" });
  res.status(200).json(bookItem);
};

const handleAddBook = async (req, res) => {
  Book.create(req.body);
  res.status(201).json({ status: 201, message: "Book is added successfully" });
};

const handleUpdateBookById = async (req, res) => {
  const bookItem = await Book.findByIdAndUpdate(req.params.id, req.bogy);

  if (bookItem.length === 0)
    res.status(404).json({ status: 404, message: "Book is not Found" });
  res.status(200).json({ status: 200, message: "Book updated successfully" });
};
const handleDeleteBook = async (req, res) => {
  const bookItem = await Book.findByIdAndDelete(req.params.id);

  if (bookItem.length === 0)
    res.status(404).json({ status: 404, message: "Book is not Found" });
  res.status(200).json({ status: 200, message: "Book deleted successfully" });
};

module.exports = {
  handleGetBook,
  handleGetBookById,
  handleAddBook,
  handleDeleteBook,
  handleUpdateBookById,
};
