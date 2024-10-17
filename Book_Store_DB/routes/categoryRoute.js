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

router
  .route("/")
  .get(handleGetCategories)
  .post(validateCategory, handleAddCategory);

router
  .route("/:id")
  .get(handleGetCategoryById)
  .put(validateCategory, handleUpdateCategoryById)
  .delete(handleDeleteCategory);

module.exports = router;
