const categories = [
  { id: 1, name: "Fiction", description: "Fictional books" },
  { id: 2, name: "Non-Fiction", description: "Non-fictional books" },
  { id: 3, name: "Sci-Fi", description: "Sci-Fi books" },
];

function getCategories(categoryId) {
  if (categoryId) {
    const category = categories.find(
      (category) => category?.id === parseInt(categoryId)
    );
    return !category
      ? { error: true, message: "Category Not found" }
      : category;
  }
  return categories;
}

function addCategory(newCategoryId) {
  categories.push(newCategoryId);
}

function updateCategory(categoryId, categoryData) {
  const authorIndex = categories.findIndex(
    (category) => category?.id === parseInt(categoryId)
  );
  if (authorIndex < 0) return { error: true, message: "Category Not found" };
  categories[authorIndex] = categoryData;
  return "Category updated successfully";
}

function deleteCategory(categoryId) {
  const authorIndex = categories.findIndex(
    (category) => category?.id === parseInt(categoryId)
  );
  if (authorIndex < 0) return { error: true, message: "Category Not found" };
  categories.splice(authorIndex, 1);
  return "Category deleted successfully";
}

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
};

// app.use(morgan("dev"));
// app.use(cors());
