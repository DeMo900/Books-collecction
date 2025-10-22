///setting the reouter 
const express = require("express");
const router = express.Router();
//home
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home")
//books
const books = require("/home/adam/coding/Books-collecction/controllers/books.js")
//errors
const errors = require("/home/adam/coding/Books-collecction/controllers/errors.js")

router.get("/",homecontroller.Gethome)
router.get("/books",books.Getbooks)

//errors
router.get("/500",errors.get500)

module.exports = router;