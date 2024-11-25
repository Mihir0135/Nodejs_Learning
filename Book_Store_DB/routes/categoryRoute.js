const { validateCategory } = require("../middlewares/validateData");
const express = require("express");
const router = express.Router();
const {
  handleGetCategories,
  handleGetCategoryById,
  handleAddCategory,
  handleDeleteCategory,
  handleUpdateCategoryById,
} = require("../controller/categoryController");
const { validateRoleAccess } = require("../middlewares/validateAuthorization");

router
  .route("/")
  .get(handleGetCategories)
  .post([validateCategory, validateRoleAccess], handleAddCategory);

router
  .route("/:id")
  .get(handleGetCategoryById)
  .put([validateCategory, validateRoleAccess], handleUpdateCategoryById)
  .delete(validateRoleAccess, handleDeleteCategory);

module.exports = router;
