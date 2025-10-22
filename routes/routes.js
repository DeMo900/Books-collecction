///setting the reouter 
const express = require("express");
const router = express.Router();
//home
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home")
//books
const books = require("/home/adam/coding/Books-collecction/controllers/books.js")

router.get("/",homecontroller.Gethome)
router.get("/books",books.Getbooks)

//errors
router.get("/500",(req,res)=>{
    res.render("500")
})

module.exports = router;