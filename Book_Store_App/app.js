const express = require("express");
const app = express();
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoute");
const categoryRoutes = require("./routes/categoryRoute");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.use("/api", bookRoutes);
app.use("/api", authorRoutes);
app.use("/api", categoryRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`PORT listen to the ${PORT}`);
});
