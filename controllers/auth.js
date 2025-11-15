//requiring
const um = require("../models/user")
const bcrypt = require("bcrypt")
const validate = require("../validation/user")
const { body } = require("express-validator")
//GET signup
exports.Getsignup = (req,res)=>{
res.render("signup")
}
//Get signin
exports.Getsignin = (req,res)=>{
res.render("signin")
}
//POST signup
exports.Postsignup = async(req,res)=>{
//validate data
const {error} = validate(req.body)
if(error){
    return res.status(400).render("signup",{error:error.details[0].message,body:req.body})
}
//check if user already exists
try{
let user = await um.findOne({email:req.body.email})
if(user){
    return res.status(400).render("signup",{error:"User with this email already exists",body:req.body})
}
//hasing the password
let hashedpassword = await bcrypt.hash(req.body.password,11)
req.body.password = hashedpassword
//storing the user
const nuser =  new um(req.body)
await nuser.save()
//loging the error and redirecting to the error page
}catch(err){
    console.log(err)
    return res.status(500).render("500")
}
}
//POST signin
exports.Postsignin = (req,res)=>{

}