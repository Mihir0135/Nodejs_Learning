const { validateAuthor } = require("../middlewares/validateData");
const express = require("express");
const router = express.Router();
const {
  handleAddAuthor,
  handleDeleteAuthor,
  handleGetAuthor,
  handleGetAuthorById,
  handleUpdateAuthorById,
} = require("../controller/authorController");

router.route("/").get(handleGetAuthor).post(validateAuthor, handleAddAuthor);

router
  .route("/:id")
  .get(handleGetAuthorById)
  .put(validateAuthor, handleUpdateAuthorById)
  .delete(handleDeleteAuthor);

module.exports = router;
