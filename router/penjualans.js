const route = require('express').Router();
const penjualans = require('./../controllers/penjualans')

route.post("/", async (req, res, next) => {
    let result = await penjualans.create(req.body)
    res
        .status(200)
        .json(result)
});

route.get("/", async (req, res, next) => {
    let result = await penjualans.getList()
    res
        .status(200)
        .json(result)
});

route.put("/", async (req,res,next) => {
    let result = await penjualans.update(req.body,req.params.id)
    res.status(200).json(result)
});

route.delete("/", async (req,res,next) => {
    let result = await penjualans.delete(req.params.id)
    res.status(200).json(result)
});

module.exports = route