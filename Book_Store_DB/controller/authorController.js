const Author = require("../models/authorModel");

const handleGetAuthor = async (req, res) => {
  const authorList = await Author.find({});
  res.status(200).json(authorList);
};

const handleGetAuthorById = async (req, res) => {
  await Author.findById(req.params.id)
    .then((author) => {
      if (author) res.status(200).json(author);
      else res.status(404).json({ status: 404, messgae: "Author not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Author not found" });
    });
};

const handleAddAuthor = async (req, res) => {
  Author.create(req.body);
  res
    .status(201)
    .json({ status: 201, message: "Author is added successfully" });
};

const handleUpdateAuthorById = async (req, res) => {
  await Author.findByIdAndUpdate(req.params.id, req.body)
    .then((author) => {
      if (author)
        res
          .status(200)
          .json({ status: 200, message: "Author updated successfully" });
      else res.status(404).json({ status: 404, messgae: "Author not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Author not found" });
    });
};

const handleDeleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id)
    .then((author) => {
      if (author)
        res
          .status(200)
          .json({ status: 200, message: "Author deleted successfully" });
      else res.status(404).json({ status: 404, messgae: "Author not found" });
    })
    .catch((error) => {
      console.log(error, "------error------");
      res.status(404).json({ status: 404, messgae: "Author not found" });
    });
};

module.exports = {
  handleGetAuthor,
  handleGetAuthorById,
  handleAddAuthor,
  handleDeleteAuthor,
  handleUpdateAuthorById,
};
