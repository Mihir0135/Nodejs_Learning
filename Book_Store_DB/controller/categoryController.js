const Category = require("../models/categoryModel");

const handleGetCategories = async (req, res) => {
  const categoryList = await Category.find({});
  res.status(200).json(categoryList);
};

const handleGetCategoryById = async (req, res) => {
  await Category.findById(req.params.id)
    .then((category) => {
      if (category) res.status(200).json(category);
      else res.status(404).json({ status: 404, messgae: "Category not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Category not found" });
    });
};

const handleAddCategory = async (req, res) => {
  Category.create(req.body);
  res
    .status(201)
    .json({ status: 201, message: "Category is added successfully" });
};

const handleUpdateCategoryById = async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, req.body)
    .then((category) => {
      if (category)
        res
          .status(200)
          .json({ status: 200, message: "Category updated successfully" });
      else res.status(404).json({ status: 404, messgae: "Category not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Category not found" });
    });
};

const handleDeleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (category)
        res
          .status(200)
          .json({ status: 200, message: "Category deleted successfully" });
      else res.status(404).json({ status: 404, messgae: "Category not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Category not found" });
    });
};

module.exports = {
  handleGetCategories,
  handleGetCategoryById,
  handleAddCategory,
  handleDeleteCategory,
  handleUpdateCategoryById,
};
