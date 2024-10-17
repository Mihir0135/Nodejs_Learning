const { validateCategory } = require("../middlewares/validateData");
const Category = require("../models/categoryModel");
const express = require("express");
const router = express.Router();
const {
  handleGetCategories,
  handleGetCategoryById,
  handleAddCategory,
  handleDeleteCategory,
  handleUpdateCategoryById,
} = require("../controller/categoryController");

router.route("/").get(handleAddCategory).post(handleAddCategory);

router
  .route("/:id")
  .get(handleGetCategoryById)
  .put(handleUpdateCategoryById)
  .delete(handleDeleteCategory);

module.exports = router;
