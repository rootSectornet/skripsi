const route = require('express').Router();
const rijndael = require('./../controllers/rijndael')
let Transaction = require("./../controllers/transactions")
Transaction = new Transaction();
route.post("/penjualan", async (req,res,next)=>{
    Transaction.getPenjualan(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});
route.post("/pembelian", async (req,res,next)=>{
    Transaction.getPembelian(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});

route.post("/penjualan/detail", async (req,res,next)=>{
    Transaction.detailPenjualan(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});
route.post("/pembelian/detail", async (req,res,next)=>{
    Transaction.detailPembelian(req.body)
    .then((item)=>{
        res.status(200).send(rijndael.encrypt({status:true,data:item,message:"success"}))
    })
    .catch((e)=>{
        console.log(e)
        res.status(200).send(rijndael.encrypt({status:false,data:[],message:e}))
    })
});

module.exports = route