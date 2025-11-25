//requiring modules
const session = require("express-session")
const store = require("connect-mongo")
const multer = require("multer")
require("dotenv").config();
//sesion creation
exports.session = session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false,
    cookie: { maxAge: 900000 },
store:store.create({mongoUrl:process.env.DB_URL})
})
//authentication middleware
exports.check = (req,res,next)=>{
    if(!req.session.user){
        return  res.status(401).render("500");
    }
    next()
}
//multer
exports.storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,__dirname+"/assets/uploads")
  },
  filename:(req,file,cb)=>{
    let name = Date.now()+"-"+file.originalname
    cb(null,name)
    req.body.cover = name;
  }
})
exports.filter = (req,file,cb)=>{
  if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
    cb(null,true)
  }else{
cb(null,false)
  }
}