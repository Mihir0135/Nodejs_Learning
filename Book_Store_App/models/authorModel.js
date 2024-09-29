const authors = [
  { id: 1, name: "Author 1", biography: "Bio of Author 1" },
  { id: 2, name: "Author 2", biography: "Bio of Author 2" },
  { id: 3, name: "Author 3", biography: "Bio of Author 3" },
];

function getAuthors(authorId) {
  if (authorId) {
    const author = authors.find((author) => author?.id === parseInt(authorId));
    return !author ? { error: true, message: "Author Not found" } : author;
  }
  return authors;
}

function addAuthor(newAuthor) {
  authors.push(newAuthor);
}

function updateAuthor(authorId, authorData) {
  const authorIndex = authors.findIndex(
    (author) => author?.id === parseInt(authorId)
  );
  if (authorIndex < 0) return { error: true, message: "Author Not found" };
  authors[authorIndex] = authorData;
  return "Author updated successfully";
}

function deleteAuthor(authorId) {
  const authorIndex = authors.findIndex(
    (author) => author?.id === parseInt(authorId)
  );
  if (authorIndex < 0) return { error: true, message: "Author Not found" };
  authors.splice(authorIndex, 1);
  return "Author deleted successfully";
}

module.exports = {
  addAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthors,
};
