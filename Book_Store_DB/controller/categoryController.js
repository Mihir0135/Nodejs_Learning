const Category = require("../models/categoryModel");

const handleGetCategories = async (req, res) => {
  const categoryList = await Category.find({});
  res.status(200).json(categoryList);
};

const handleGetCategoryById = async (req, res) => {
  const categoryItem = await Category.findById(req.params.id);

  if (categoryItem.length === 0)
    res.status(404).json({ status: 404, message: "Category is not Found" });
  res.status(200).json(categoryItem);
};

const handleAddCategory = async (req, res) => {
  Category.create(req.body);
  res
    .status(201)
    .json({ status: 201, message: "Category is added successfully" });
};

const handleUpdateCategoryById = async (req, res) => {
  const categoryItem = await Category.findByIdAndUpdate(
    req.params.id,
    req.bogy
  );

  if (categoryItem.length === 0)
    res.status(404).json({ status: 404, message: "Category is not Found" });
  res
    .status(200)
    .json({ status: 200, message: "Category updated successfully" });
};
const handleDeleteCategory = async (req, res) => {
  const categoryItem = await Category.findByIdAndDelete(req.params.id);

  if (categoryItem.length === 0)
    res.status(404).json({ status: 404, message: "Category is not Found" });
  res
    .status(200)
    .json({ status: 200, message: "Category deleted successfully" });
};

module.exports = {
  handleGetCategories,
  handleGetCategoryById,
  handleAddCategory,
  handleDeleteCategory,
  handleUpdateCategoryById,
};
