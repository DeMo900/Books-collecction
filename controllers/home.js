
const express = require("express");
const router = express.Router();


module.exports = {
    router,
}


/*
/	Homepage (show top or newest books)	
/books	Show all books (with search + filter)	
/books/:id	Show single book details	
/add-book	Add a new book (form + POST)	
/books/:id/review	Add a review	
/login, /signup	Auth routes
*/