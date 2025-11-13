//requiring
const um = require("../models/user")
const bcrypt = require("bcrypt")
const validate = require("../validation/user")
//GET signup
exports.Getsignup = (req,res)=>{
res.render("signup")
}
//Get signin
exports.Getsignin = (req,res)=>{
res.render("signin")
}
//POST signup
exports.Postsignup = (req,res)=>{
//validate data
const {error} = validate(req.body)
if(error){
    return res.status(400).send(error.details[0].message)
}

console.log(validate(req.body));
//check if user already exists
//hash password
//store in db
//bcrypt

}
//POST signin
exports.Postsignin = (req,res)=>{

}