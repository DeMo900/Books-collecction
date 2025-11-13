//requiring joi
const joi = require("joi")


const data = (body)=>{
    const schema = joi.object({
username:joi.string().min(3).max(25).pattern(/^[A-Za-z0-9._\- ]+$/).required(),
password:joi.string().min(8).max(80).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,80}$/).required(),
email:joi.string().max(50).pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
role:joi.string().valid("creator","user").default("user").required(),

})
return schema.validate(body)
}
module.exports = data