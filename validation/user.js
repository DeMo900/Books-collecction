//requiring joi
const joi = require("joi")


const data = (body)=>{
    const schema = joi.object({
username:joi.string().min(3).max(25).pattern(/^[A-Za-z0-9._\- ]+$/).required().messages({
"string.base":"Username must be a string",
"string.min":"Username must be at least 3 characters long",
"string.max":"Username must be at most 25 characters long",
"string.pattern.base":"Username can only contain letters, numbers, spaces, dots, underscores, and hyphens",
"any.required":"Username is required"
}),
password:joi.string().min(8).max(80).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,80}$/).required().messages({
"string.base":"Password must be a string",
"string.min":"Password must be at least 8 characters long",
"string.max":"Password must be at most 80 characters long",
"string.pattern.base":"Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
"any.required":"Password is required"
}),
email:joi.string().max(50).pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
"string.base":"Email must be a string",
"string.pattern.base":"Email must be a valid email address",
"any.required":"Email is required"
}),
confirmpassword:joi.valid(joi.ref("password")).required().messages({
"any.only":"Confirm Password does not match Password",
"any.required":"Confirm Password is required"
})
})
return schema.validate(body)
}
module.exports = data