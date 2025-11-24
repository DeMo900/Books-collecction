//requiring
const um = require("../models/user")
const bcrypt = require("bcrypt")
const validate = require("../validation/user")
const { body,validationResult } = require("express-validator")
const mail = require("nodemailer")
const crypto = require("crypto")

//GET signup
exports.Getsignup = (req,res)=>{
res.render("signup")
}
//Get signin
exports.Getsignin = (req,res)=>{
res.render("signin",{error:undefined,body:undefined})
}
//POST signup
exports.Postsignup = async(req,res)=>{
//validate data
const {error} = validate(req.body,"signup")
if(error){
    return res.status(400).render("signup",{error:error.details[0].message,body:req.body})
}
//check if user already exists
try{
let user = await um.findOne({email:req.body.email})//finding
if(user){
    return res.status(400).render("signup",{error:"User with this email already exists",body:req.body})
}
//hasing the password
let hashedpassword = await bcrypt.hash(req.body.password,11)
req.body.password = hashedpassword
//storing the user
const nuser =  new um(req.body)
await nuser.save()//saving
return res.redirect("/signup")//redirecting
//loging the error and redirecting to the error page
}catch(err){
    console.log(err)
    return res.status(500).render("500")
}
}
//POST signin
exports.Postsignin = async(req,res)=>{
//validation
const {error} = validate({email:req.body.email,password:req.body.password},"signin")
if(error){
    console.log(error)
    return res.status(400).render("signin",{error:error.details[0].message,body:req.body})
}
//chcking if user exists
try{
    let user = await um.findOne({email : req.body.email})
    if (!user){
        console.log("user doesn't exist")
        return res.status(400).render("signin",{error:`user doesn't exist, signup first`,body:req.body})
    }
    //checking if password is correct
    let compare = await bcrypt.compare(req.body.password,user.password)
    if(!compare){
        console.log("password doesn't match")
      return  res.status(400).render("signin",{error:"wrong password!",body:req.body})
    }
    //creating session 
    req.session.user = {email:req.body.email,
        id:user._id
    }
    //redirecting
return res.redirect("/")
}catch(error){
    console.log (error)
    return res.status(500).render(500)
}
}
//forgotpassword
exports.Postforgotpassword = async (req,res)=>{
//validating the input
try{
const results= validationResult(req)
if(!results.isEmpty()){
 return console.log(results.errors[0].msg)
}
let found = await um.findOne({email:req.body.email})
if(!found){
  return  console.log("email doesn't exist signup")
}
//generating code
let code = crypto.randomBytes(16).toString("hex") 
//storing the code
req.session.code={code:code,email:req.body.email}
req.session.save()
console.log(req.session.code)
//sending the email
let transport = mail.createTransport({//creating transport
    service:"gmail",
    auth:{
        user:"proplayer524522@gmail.com",
        pass:process.env.APPCODE
    }
})
//sending
await transport.sendMail({
  to: req.body.email,
  subject: "Here is your url to reset your password", 
  text: `http://localhost:9000/update-password?code=${code}`, 
})
return res.send("session created"+req.session.code)
}catch(err){//handling errors
    console.log(err)
    return res.render("500")
}
}
//Getupdate
exports.Getupdate = (req,res)=>{
let {code} = req.session.code
if(code !== req.query.code){
return res.send("error invalid code")
}
res.send("authenticated")
}
//updating password
exports.Putupdate = async(req,res)=>{
let {email} = req.session.code
try{
//validating password
const results = validationResult(req)
if(!results.isEmpty()){
    return res.status(400).send(results.errors[0].msg)
}
//hashing the new password
let hashedpassword = await bcrypt.hash(req.body.password,11)
//getting the user
let user = await um.findOne({email:email})
await user.updateOne({password:hashedpassword})
return res.send("password updated sucsessfully")
}catch(error){
    console.log(`error while updating password ${error}`)
    return res.status(500).render("500")
}
}

//logout
exports.logout=async(req,res)=>{
    try{
   await req.session.destroy()
   res.clearCookie("connect.sid")
    return res.render("signin",{error:"sucsessfully logged you out!",body:{}})
    }catch(error){
        console.log(`error while destroying`)
        return res.status(500).render("500")
    }
}