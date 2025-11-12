//requiring 
const mongodb = require("mongoose")
//creating the schema
const user = new mongodb.Schema({
username:{type : String , unique : true, minlength:3 , maxlength:25 , required:true , match : /^[A-Za-z0-9._\- ]+$/},
password:{type : String , minlength : 8 , maxlength : 80 , required : true , match : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,80}$/},
role:{type : String , enum : [`creator`,`user`] , default : `user` , required : true },
createdAt:{type:Date , default:Date.now()}
})
//modeling 
const um = mongodb.model("user",user)
//exporting
module.exports = um
