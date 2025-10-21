const mongodb = require("mongoose");

let books = new mongodb.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3,
    lowercase: true,
    unique: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    lowercase: true,
  },
  pages: {
    required: true,
    type: Number,
  },
});

let bm = mongodb.model("books", books);

module.exports = bm;
