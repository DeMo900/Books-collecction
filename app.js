//modules
const express = require("express");
const mongodb = require("mongoose");
const multer = require("multer");
const middlewares = require("./middlewares.js");
const passport = require("passport");
//router
const homerouter = require("./routes/routes.js");
require("dotenv").config();
//app
const app = express();
//middlewares
app.use(multer({storage:middlewares.storage,fileFilter:middlewares.filter}).single("cover"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.use(middlewares.session)
app.use(homerouter);
app.use(passport.initialize());
app.use(passport.session());
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

