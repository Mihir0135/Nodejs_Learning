const Author = require("../models/authorModel");

const handleGetAuthor = async (req, res) => {
  const authorList = Author.find({});
  res.status(200).json(authorList);
};

const handleGetAuthorById = async (req, res) => {
  const authorItem = await Author.findById(req.params.id);

  if (authorItem.length === 0)
    res.status(404).json({ status: 404, message: "Author is not Found" });
  res.status(200).json(authorItem);
};

const handleAddAuthor = async (req, res) => {
  Author.create(req.body);
  res
    .status(201)
    .json({ status: 201, message: "Author is added successfully" });
};

const handleUpdateAuthorById = async (req, res) => {
  const authorItem = await Author.findByIdAndUpdate(req.params.id, req.bogy);

  if (authorItem.length === 0)
    res.status(404).json({ status: 404, message: "Author is not Found" });
  res.status(200).json({ status: 200, message: "Author updated successfully" });
};
const handleDeleteAuthor = async (req, res) => {
  const authorItem = await Author.findByIdAndDelete(req.params.id);

  if (authorItem.length === 0)
    res.status(404).json({ status: 404, message: "Author is not Found" });
  res.status(200).json({ status: 200, message: "Author deleted successfully" });
};

module.exports = {
  handleGetAuthor,
  handleGetAuthorById,
  handleAddAuthor,
  handleDeleteAuthor,
  handleUpdateAuthorById,
};
