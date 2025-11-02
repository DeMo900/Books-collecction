///setting the reouter 
const express = require("express");
const router = express.Router();
//home
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home")
//books
const books = require("/home/adam/coding/Books-collecction/controllers/books.js")
//add book
const addbook = require("/home/adam/coding/Books-collecction/controllers/add-books.js")
//errors
const errors = require("/home/adam/coding/Books-collecction/controllers/errors.js")
/////////////////////////////////////
//home
router.get("/",homecontroller.Gethome)
//books
router.get("/books",books.Getbooks)
router.post("/books/search",books.searchbook)
//add book
router.get("/books/add-book",addbook.Getaddbook)
router.post("/books/add-book",addbook.createbook)
//errors
router.get("/500",errors.get500)
//about 
router.get("/about",homecontroller.Getabout)
module.exports = router;