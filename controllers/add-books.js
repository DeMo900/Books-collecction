
const bm = require("/home/adam/coding/Books-collecction/models/book.js")
const {validationResult} = require("express-validator")


//add book
exports.Getaddbook = (req,res)=>{
res.render("add-book",{error:"",body:""})
}
//create book
exports.createbook = async(req,res)=>{
    try{
let results = validationResult(req)
console.log(req.file)
console.log(req.body)
if(!results.isEmpty()){
    console.log(results.array())
    res.render("add-book",{error:results.array(),body:req.body})
   // return res.status(422).render("add-book",{errors:results.array()})
}
let newbm = new bm({
 title: req.body.title,
  author: req.body.author,
  desc: req.body.desc,
  genre: req.body.genre,
  publisyear: req.body.publisyear,
  coverurl: req.body.cover

})
await newbm.save()
    }catch(err){
        console.log(`error from createbook \n${err}`)
        res.status(500).redirect("/500")
    }

}