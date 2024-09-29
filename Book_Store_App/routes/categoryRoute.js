const { validateCategory } = require("../middlewares/validateData");
const categoryModel = require("../models/categoryModel");
const express = require("express");
const route = express.Router();

route.get("/categories", (req, res) => {
  res.status(200).json(categoryModel.getCategories());
});

route.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const categoryRes = categoryModel.getCategories(categoryId);
  if (categoryRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: categoryRes.message });
  res.status(200).json(categoryRes);
});

route.post("/categories", validateCategory, (req, res) => {
  const newCategory = {
    id: categoryModel.getCategories().length + 1,
    ...req.body,
  };
  categoryModel.addCategory(newCategory);
  res
    .status(201)
    .json({ status: 201, message: "Category Added Successfully." });
});

route.put("/categories/:id", validateCategory, (req, res) => {
  const categoryId = req.params.id;
  const categoryRes = categoryModel.updateCategory(categoryId, req.body);
  if (categoryRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: categoryRes.message });
  res.status(200).json({ status: 200, message: categoryRes });
});

route.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const categoryRes = categoryModel.deleteCategory(categoryId);
  if (categoryRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: categoryRes.message });
  res.status(200).json({ status: 200, message: categoryRes });
});

module.exports = route;
