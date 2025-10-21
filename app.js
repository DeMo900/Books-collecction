//modules
const express = require("express");
const mongodb = require("mongoose");
const homecontroller = require("/home/adam/coding/Books-collecction/controllers/home.js");
require("dotenv").config();
//app
const app = express();
//router
let router = require("./routes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.set("vew engine", "ejs");
app.use(homecontroller.router);
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
app.listen(3000, (err) => {
  err ? console.log(err) : console.log(`conected`);
});
app.use(router);
