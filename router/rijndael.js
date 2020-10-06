const route = require('express').Router();
const rijndael = require('./../controllers/rijndael')

route.post("/encrypt", async (req,res,next)=>{
    let result = rijndael.encrypt(req.body)
    res.status(200).send(result)
}); // /api/v1/login 
  
route.post("/decrypt", async (req,res,next)=>{
    let result = rijndael.decrypt(req.body)
    res.status(200).send(result)
}); // /api/v1/login 
  

module.exports = route