const express = require("express");
const { validateBook } = require("../middlewares/validateData");
// const mongoose = require("mongoose");
const router = express.Router();
// const Book = require("../models/bookModel");
const {
  handleGetBook,
  handleGetBookById,
  handleAddBook,
  handleDeleteBook,
  handleUpdateBookById,
} = require("../controller/bookController");
const { validateRoleAccess } = require("../middlewares/validateAuthorization");

router
  .route("/")
  .get(handleGetBook)
  .post([validateBook, validateRoleAccess], handleAddBook);

router
  .route("/:id")
  .get(handleGetBookById)
  .put([validateBook, validateRoleAccess], handleUpdateBookById)
  .delete(validateRoleAccess, handleDeleteBook);

module.exports = router;
