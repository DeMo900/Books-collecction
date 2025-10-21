const mongodb = require("mongoose");

let books = new mongodb.Schema({
  title : {type:String , maxlength:80, required:true},
  author :{type:String , maxlength:25, required:true},
  desc:{type:String , maxlength:500, required:true},
  genre:{type:String , maxlength:25, required:true},
  publisyear : {type : Number , maxlength:4, required:true }, 
  coverurl : {type:String , required:true},
  rating : {type : Number  , max:5, required:true},
  createdAt : {type:Date , default:Date.now()},
});

let bm = mongodb.model("books", books);

module.exports = bm;
/*
title
author
desc
genre
publishyear
coverurl
rating
reviews
createdAt
*/