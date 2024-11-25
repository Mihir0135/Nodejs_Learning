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
const { validateRoleAccess } = require("../middlewares/validateAuthorization");

router
  .route("/")
  .get(handleGetAuthor)
  .post([validateAuthor, validateRoleAccess], handleAddAuthor);

router
  .route("/:id")
  .get(handleGetAuthorById)
  .put([validateAuthor, validateRoleAccess], handleUpdateAuthorById)
  .delete(validateRoleAccess, handleDeleteAuthor);

module.exports = router;
