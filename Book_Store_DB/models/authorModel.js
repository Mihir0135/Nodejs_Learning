const { required } = require("joi");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;