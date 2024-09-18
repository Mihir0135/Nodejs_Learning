const express = require("express");
const Joi = require("joi");
const port = 8000;
const app = express();

const books = require("./book.json");

app.use(express.json());

const bookSchema = Joi.object({
  id: Joi.string(),
  author: Joi.string().min(3).max(30).required(),
  title: Joi.string().min(3).max(50).required(),
  categories: Joi.string().min(3).max(30).required(),
  year: Joi.number().greater(1000).less(2025),
  edition: Joi.string(),
  language: Joi.string(),
});

app.get("/", (req, res) => {
  res.send("Welcome to the Book Store");
});

const getFilterAuthorBooks = (authorName) =>
  books.filter((bookItem) =>
    bookItem?.author?.toLowerCase()?.includes(authorName?.toLowerCase())
  );

const getPaginateBooks = (booksData, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(pageSize * page, booksData?.length);
  return booksData?.slice(startIndex, endIndex);
};

app.get("/api/books", (req, res) => {
  const { page, pageSize, author } = req.query;
  let filterBooks = [...books];
  if (author) {
    const updatedBooks = getFilterAuthorBooks(author);
    if (updatedBooks?.length) {
      filterBooks = updatedBooks;
    } else {
      res.status(404).send("Author name is not found");
      return;
    }
  }
  if (page && pageSize) {
    if (page < 1 || pageSize < 1) {
      res.status(400).send("Always Enter positive number on Page and PageSize");
      return;
    }
    filterBooks = getPaginateBooks(filterBooks, page, pageSize);
  }
  res.json(filterBooks);
});

app.get("/api/book/:id", (req, res) => {
  const bookId = req.params.id;
  const book = books.find((bookItem) => bookItem?.id === bookId);
  if (!book) {
    res.status(404).send(`Book was Not Found Using this Id: ${bookId}`);
    return;
  }
  res.json(book);
});

app.post("/api/addBook", (req, res) => {
  const validateBook = bookSchema.validate(req.body);
  if (validateBook.error) {
    res.status(400).send(validateBook.error.details[0].message);
    return;
  }
  const newBook = {
    id: books.length + 1,
    ...req.body,
  };
  books.push(newBook);
  res.json("Book Added Successfully");
});

app.put("/api/updateBook/:id", (req, res) => {
  const bookId = req.params.id;
  const book = books.find((bookItem) => bookItem?.id === bookId);
  const bookIndex = books.findIndex((bookItem) => bookItem?.id === bookId);
  if (!book) {
    res.status(404).send(`Book was Not Found Using this Id: ${bookId}`);
    return;
  }
  const validateBook = bookSchema.validate(req.body);
  if (validateBook.error) {
    res.status(400).send(validateBook.error.details[0].message);
    return;
  }
  const updatedBook = {
    ...book,
    ...req.body,
  };
  books[bookIndex] = updatedBook;
  res.json("Book Updated Successfully");
});

app.delete("/api/deleteBook/:id", (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex((bookItem) => bookItem?.id === bookId);
  if (bookIndex < 0) {
    res.status(404).send(`Book was Not Found Using this Id: ${bookId}`);
    return;
  }
  books.splice(bookIndex, 1);
  res.json("Book Deleted Successfully");
});

app.listen(port, () => {
  console.log("server running on the 8000");
});
