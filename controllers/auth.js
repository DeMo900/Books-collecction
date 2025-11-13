//requiring
const um = require("../models/user")
const bcrypt = require("bcrypt")
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
//check if user already exists
//hash password
//store in db
//bcrypt

}
//POST signin
exports.Postsignin = (req,res)=>{

}