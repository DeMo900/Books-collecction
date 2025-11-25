//requiring 

const um = require("/home/adam/coding/Books-collecction/models/user.js")


exports.Getprofile = async(req,res)=>{
 try{
    //user data
    let data = await um.findById(req.session.user.id)
    //user's books
    let books = await data.populate('books')
    console.log(books)
    
    
 }  catch(err){
    console.log(`error from getprofile \n${err}`)
 } 
}