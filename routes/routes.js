///setting the reouter 
const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
//home
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home")
//books
const books = require("/home/adam/coding/Books-collecction/controllers/books.js")
//add book
const addbook = require("/home/adam/coding/Books-collecction/controllers/add-books.js")
//auth
const { Getsignup , Getsignin , Postsignup , Postsignin , Postforgotpassword , logout } = require("../controllers/auth");
//errors
const errors = require("/home/adam/coding/Books-collecction/controllers/errors.js");
/////////////////////////////////////
//home
router.get("/",homecontroller.Gethome)
//books
router.get("/books",books.Getbooks)
router.post("/books/search",books.searchbook)
//add book
router.get("/books/add-book",addbook.Getaddbook)
router.post("/books/add-book",
body("title").notEmpty().isLength({min:4,max:80}).withMessage("you should type atleast 4 letters in title :("),
body("author").isLength({max:25}).notEmpty().withMessage("author name is required"),
body("desc").notEmpty().isLength({min:25,max:500}).withMessage("you should type atleast 25 letters in descreption duh"),
body("genre").notEmpty().isIn(["Fiction","Non-Fiction","Fantasy","Science Fiction","Romance","Thriller","Mystery","Biography","Self-Help","History","Poetry"])
.isLength({min:6 , max:16}).withMessage("please pick a genre"),
body("publisyear").isLength({max:4}).isNumeric().notEmpty().withMessage("publish year is required")
,addbook.createbook)
//signup and signin
router.get("/signup",Getsignup)
router.get("/signin",Getsignin)
router.post("/signup",Postsignup)
router.post("/signin",Postsignin)
router.post("/logout",logout)
router.post("/forgot-password",
    body("email").isEmail().withMessage("email isn't valid")
    ,Postforgotpassword)
//errors
router.get("/500",errors.get500)
//about 
router.get("/about",homecontroller.Getabout)
module.exports = router;