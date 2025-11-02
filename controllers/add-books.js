
const bm = require("/home/adam/coding/Books-collecction/models/book.js")
const {validationResult} = require("express-validator")

//add book
exports.Getaddbook = (req,res)=>{
res.render("add-book")
}
//create book
exports.createbook = (req,res)=>{
    try{

let results = validationResult(req)
console.log(req.body)

console.log(results)
res.send(results)

    }catch(err){
        console.log(`error from createbook \n${err}`)
        res.status(500).redirect("/500")
    }

}