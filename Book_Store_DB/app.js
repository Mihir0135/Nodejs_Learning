const express = require("express");
const app = express();
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoute");
const categoryRoutes = require("./routes/categoryRoute");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectMongodb } = require("./connection");

const PORT = 3001;

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.use("/api/categories", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/books", categoryRoutes);

connectMongodb("mongodb://127.0.0.1:27017/book_store").then(() =>
  console.log("Connected to MongoDB")
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`PORT listen to the ${PORT}`);
});
