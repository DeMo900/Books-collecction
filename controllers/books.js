// ...existing code...
const { query } = require("express-validator")
const bm = require("/home/adam/coding/Books-collecction/models/book.js")

/*let document = [
    {
        title: "the blcak soul",
        author: "adam",
        desc: "a cool novel",
        genre: "Fantasy",
        publisyear: 2007,
        coverurl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/illustrative-historical-fiction%2C-knight%2C-crus-design-template-1399cb70cc3f919c92ce77576f8311c1.webp?ts=1719676854",
        rating: 4,
    },
    {
        title: "the land of clouds",
        author: "chloe ellis",
        desc: "A gripping small-town mystery that uncovers buried secrets.",
        genre: "Mystery",
        publisyear: 2015,
        coverurl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-white-thriller-book-cover-novel-des-design-template-a2d6172e45ffa55724a46d22534af278.webp?ts=1698540887",
        rating: 4.5,
    }
]
    */
 exports.Getbooks = async(req,res)=>{
  try{
    //checking if query exists
    if(req.query.genre){
      //getting and rendering the filtered books with the picked genre
    let filterdata = await bm.find({genre:req.query.genre})
   return res.render("books",{data:filterdata})
    }
    //if not get and render all boks 
        let data = await bm.find()
    res.render("books",{data:data,query:""})
  }catch(err){
    console.log(`error from Getbooks \n${err}`)
    res.redirect("/500")
  }
}

exports.Postbook = async(req,res)=>{
 
  try{
   console.log(req.body) 
//find a booke that matches the title
let book = await bm.find({$or:[{title:{$regex:req.body.query,$options:"i" }},
  {genre:{$regex:req.body.query,$options:"i" }}]})
//show it to the user
console.log(book)


return res.render("books",{data:book,query:req.body.query})
  }catch(err){  
console.log(`error from Postbook \n${err}`)
res.redirect("/500")
  } 
}