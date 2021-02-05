const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: String,
  image: String,
  link: String,
});

const Book = mongoose.model("Book", bookSchema);
