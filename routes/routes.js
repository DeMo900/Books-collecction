///setting the reouter 
const express = require("express");
const router = express.Router();
//home
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home")
//books
const books = require("/home/adam/coding/Books-collecction/controllers/books.js")
//errors
const errors = require("/home/adam/coding/Books-collecction/controllers/errors.js")
//home
router.get("/",homecontroller.Gethome)
//books
router.get("/books",books.Getbooks)
router.get("/books/add-book",books.Getaddbook)
router.post("/books/search",books.Postbook)
//errors
router.get("/500",errors.get500)
//about 
router.get("/about",homecontroller.Getabout)
module.exports = router;