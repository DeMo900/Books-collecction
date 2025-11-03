
const bm = require("/home/adam/coding/Books-collecction/models/book.js")
const {validationResult} = require("express-validator")

//add book
exports.Getaddbook = (req,res)=>{
res.render("add-book",{error:""})
}
//create book
exports.createbook = (req,res)=>{
    try{
let results = validationResult(req)

if(!results.isEmpty()){
    console.log(results.array())
    res.render("add-book",{error:results.array()})
   // return res.status(422).render("add-book",{errors:results.array()})
}

    }catch(err){
        console.log(`error from createbook \n${err}`)
        res.status(500).redirect("/500")
    }

}