const { validateAuthor } = require("../middlewares/validateData");
const express = require("express");
const router = express.Router();
const Author = require("../models/authorModel");
const {
  handleAddAuthor,
  handleDeleteAuthor,
  handleGetAuthor,
  handleGetAuthorById,
  handleUpdateAuthorById,
} = require("../controller/authorController");

router.route("/").get(handleGetAuthor).post(handleAddAuthor);

router
  .route("/:id")
  .get(handleGetAuthorById)
  .put(handleUpdateAuthorById)
  .delete(handleDeleteAuthor);

module.exports = router;
