//modules
const express = require("express");
const mongodb = require("mongoose");
const bodyparser = require("body-parser")
//app
const app = express();
//router
let router = require("./routes");
//app.use
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());
app.set("vew engine", "ejs");
mongodb
  .connect(
    "mongodb+srv://dodoadam893:x@cluster0.k6opawr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log(`conected to db`);
  })
  .catch((err) => {
    console.log(`error from mongodb ${err}`);
  });
app.listen(3000, (err) => {
  err ? console.log(err) : console.log(`conected`);
});
app.use(router);
