const books = [
  {
    id: 1,
    title: "Harry Potter",
    authorId: 1,
    categoryId: 1,
    publicationYear: 2020,
  },
  {
    id: 2,
    title: "John Wick",
    authorId: 2,
    categoryId: 2,
    publicationYear: 2019,
  },
  {
    id: 3,
    title: "The Melua",
    authorId: 3,
    categoryId: 3,
    publicationYear: 2019,
  },
];

function getBooks() {
  return books;
}

function addBook(book) {
  books.push(book);
}

function updateBook(book, bookId) {
  const reqBookIndex = books.findIndex((book) => book?.id === parseInt(bookId));
  if (!reqBookIndex) return "error";
  books[reqBookIndex] = book;
  return "Book Updated SuccessFully";
}

function deleteBook(bookId) {
  const reqBookIndex = books.findIndex((book) => book?.id === parseInt(bookId));
  if (!reqBookIndex) return "error";
  books.splice(reqBookIndex, 1);
  return "success";
}

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
};
