const route = require('express').Router();
const rijndael = require('./../controllers/rijndael')
let Product = require("./../controllers/products")
Product = new Product();
route.get("/", async (req,res,next)=>{
    Product.getAllStock()
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});
route.post("/", async (req,res,next)=>{
    Product.getStock(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});


module.exports = route