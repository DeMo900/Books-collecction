//modules
const express = require("express");
const mongodb = require("mongoose");
const multer = require("multer");
const session = require("express-session");
const store = require("connect-mongo");
//router
const homerouter = require("./routes/routes.js");
require("dotenv").config();
//app
const app = express();
//multer setup
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,__dirname+"/assets/uploads")
  },
  filename:(req,file,cb)=>{
    let name = Date.now()+"-"+file.originalname
    cb(null,name)
    req.body.cover = name;
  }
})
const filter = (req,file,cb)=>{
  if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
    cb(null,true)
  }else{
cb(null,false)
  }
}
//middlewares
app.use(multer({storage:storage,fileFilter:filter}).single("cover"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.use(session({
  secret:process.env.SECRET,resave:false,saveUninitialized:false,
    cookie: { secure: false,maxAge: 900000 },
store:store.create({mongoUrl:process.env.DB_URL})
}));
app.use("/books",(req,res,next)=>{
  if(!req.session.user){
      return res.status(401).render("500");
  }
  next()
})
app.use(homerouter);
//database connection
mongodb
  .connect(
    process.env.DB_URL,
  ) .then(() => {
    console.log(`conected to db`);
  })
  .catch((err) => {
    console.log(`error from mongodb ${err}`);
  });
app.listen(9000, (err) => {
  err ? console.log(err) : console.log(`conected`);
});

