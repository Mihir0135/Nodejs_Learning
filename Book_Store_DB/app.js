const express = require("express");
const app = express();
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoute");
const categoryRoutes = require("./routes/categoryRoute");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const { connectMongodb } = require("./connection");
const { validateToken } = require("./middlewares/validateAuthorization");

const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/books", validateToken, bookRoutes);
app.use("/api/authors", validateToken, authorRoutes);
app.use("/api/categories", validateToken, categoryRoutes);
app.use("/api/user", validateToken, userRoutes);

connectMongodb("mongodb://127.0.0.1:27017/book_store").then(() =>
  console.log("Connected to MongoDB")
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`PORT listen to the ${PORT}`);
});
