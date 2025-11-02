
const bm = require("/home/adam/coding/Books-collecction/models/book.js")


//add book
exports.Getaddbook = (req,res)=>{
res.render("add-book")
}
//create book
exports.createbook = (req,res)=>{
    try{





    }catch(err){
        console.log(`error from createbook \n${err}`)
        res.status(500).redirect("/500")
    }

}