let booksmodel = require("./models/model");
const express = require("express");
let router = express.Router();
//endpoints
router.post("/", (req, res) => {
  let newbook = new booksmodel({
    title: req.body.title,
    genre: req.body.genre,
    author: req.body.author,
    pages: req.body.pages,
  });
  newbook.save();
  console.log("added")
});
router.delete("/:id", async (req, res) => {
  try {
    await booksmodel.deleteOne({ _id: req.params.id });
    console.log("deleted");
  } catch (err) {
    console.log(`error while deleting ${err}`);
  }
});
router.post("/find",async (req,res)=>{
//req title
let body = req.body.title.trim();
let regex = new RegExp(`^${body}`)
let find = await booksmodel.find({title:regex})
res.send(find)
console.log(find)
console.log(body)
})
module.exports = router;
