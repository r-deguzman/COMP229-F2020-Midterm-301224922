let mongoose = require("mongoose");

// create a model class
let bookModel = mongoose.Schema(
  {
    title: String,
    price: String,
    author: String,
    genre: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookModel);
