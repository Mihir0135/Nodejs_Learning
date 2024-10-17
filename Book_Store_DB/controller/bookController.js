const Book = require("../models/bookModel");

const handleGetBook = async (req, res) => {
  const bookList = await Book.find({});
  res.status(200).json(bookList);
};

const handleGetBookById = async (req, res) => {
  await Book.findById(req.params.id)
    .then((book) => {
      if (book) res.status(200).json(book);
      else res.status(404).json({ status: 404, messgae: "Book not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Book not found" });
    });
};

const handleAddBook = async (req, res) => {
  Book.create(req.body);
  res.status(201).json({ status: 201, message: "Book is added successfully" });
};

const handleUpdateBookById = async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => {
      if (book)
        res
          .status(200)
          .json({ status: 200, message: "Book updated successfully" });
      else res.status(404).json({ status: 404, message: "Book not Found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Book not found" });
    });
};

const handleDeleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (book)
        res
          .status(200)
          .json({ status: 200, message: "Book deleted successfully" });
      else res.status(404).json({ status: 404, message: "Book is not Found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Book not found" });
    });
};

module.exports = {
  handleGetBook,
  handleGetBookById,
  handleAddBook,
  handleDeleteBook,
  handleUpdateBookById,
};
