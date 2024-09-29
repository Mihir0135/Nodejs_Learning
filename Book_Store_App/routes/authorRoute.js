const { validateAuthor } = require("../middlewares/validateData");
const authorModel = require("../models/authorModel");
const express = require("express");
const route = express.Router();

route.get("/authors", (req, res) => {
  res.status(200).json(authorModel.getAuthors());
});

route.get("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  const authorRes = authorModel.getAuthors(authorId);
  if (authorRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: authorRes.message });
  res.status(200).json(authorRes);
});

route.post("/authors", validateAuthor, (req, res) => {
  const newAuthor = {
    id: authorModel.getAuthors().length + 1,
    ...req.body,
  };
  authorModel.addAuthor(newAuthor);
  res.status(201).json({ status: 201, message: "Author Added Successfully." });
});

route.put("/authors/:id", validateAuthor, (req, res) => {
  const authorId = req.params.id;
  const authorRes = authorModel.updateAuthor(authorId, req.body);
  if (authorRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: authorRes.message });
  res.status(200).json({ status: 200, message: authorRes });
});

route.delete("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  const authorRes = authorModel.deleteAuthor(authorId);
  if (authorRes.error)
    return res
      .status(404)
      .json({ status: 404, errorMessage: authorRes.message });
  res.status(200).json({ status: 200, message: authorRes });
});

module.exports = route;
