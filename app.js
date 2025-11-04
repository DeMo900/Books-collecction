//modules
const express = require("express");
const mongodb = require("mongoose");
const multer = require("multer");
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
//middlewares
app.use(multer({storage:storage}).single("cover"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.set("view engine", "ejs");
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

