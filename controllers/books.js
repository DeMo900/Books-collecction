//requiring
const bm = require("/home/adam/coding/Books-collecction/models/book.js")

let Getbooks = (req,res)=>{
    res.render("books",bm.find())
}
module.exports = {Getbooks}
