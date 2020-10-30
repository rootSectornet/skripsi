const route = require('express').Router();
const rijndael = require('./../controllers/rijndael')
let User = require("./../controllers/users")
User = new User();
route.post("/login", async (req,res,next)=>{
    User.login(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
}); // /api/v1/login
 // /api/v1/login


module.exports = route