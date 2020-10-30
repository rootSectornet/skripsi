const route = require('express').Router();
const rijndael = require('./../controllers/rijndael')
let Warehouse = require("./../controllers/warehouses")
Warehouse = new Warehouse();
route.get("/", async (req,res,next)=>{
    Warehouse.data()
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