const route = require('express').Router();
const users = require('./../controllers/users')

route.post("/login", async (req,res,next)=>{
    let result = await users.getList(req.body)
    res.status(200).json(result)
}); // /api/v1/login 
  

module.exports = route