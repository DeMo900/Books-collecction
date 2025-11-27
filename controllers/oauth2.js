const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2").Strategy;

//askingfor the required data
let page = passport.authenticate("google",{scope:["profile","email"]});


//callback route
let fail = passport.authenticate("google",{failureRedirect:"/login"})

let sucsess = (req,res)=>{
    //successful authentication
    req.session.user = req.user;
    res.redirect("/");
}
module.exports = {page,fail,sucsess};