const express = require("express");
const { validateBook } = require("../middlewares/validateData");
// const mongoose = require("mongoose");
const router = express.Router();
const Book = require("../models/bookModel");
const {
  handleGetBook,
  handleGetBookById,
  handleAddBook,
  handleDeleteBook,
  handleUpdateBookById,
} = require("../controller/bookController");

router.route("/").get(handleGetBook).post(handleAddBook);

router
  .route("/:id")
  .get(handleGetBookById)
  .put(handleUpdateBookById)
  .delete(handleDeleteBook);

module.exports = router;
