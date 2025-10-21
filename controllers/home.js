const bm = require("/home/adam/coding/Books-collecction/models/book.js")
//home 
let Gethome = (req,res)=>{
    res.render("home")
}
module.exports = {Gethome}



/*
/	Homepage (show top or newest books)	
/books	Show all books (with search + filter)	
/books/:id	Show single book details	
/add-book	Add a new book (form + POST)	
/books/:id/review	Add a review	
/login, /signup	Auth routes
*/