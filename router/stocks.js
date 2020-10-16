const route = require('express').Router();
const stocks = require('./../controllers/stocks')

route.post("/", async (req, res, next) => {
    let result = await stocks.create(req.body)
    res
        .status(200)
        .json(result)
});

route.get("/", async (req, res, next) => {
    let result = await stocks.getList()
    res
        .status(200)
        .json(result)
});

route.put("/", async (req,res,next) => {
    let result = await stocks.update(req.body,req.params.id)
    res.status(200).json(result)
});

route.delete("/", async (req,res,next) => {
    let result = await stocks.delete(req.params.id)
    res.status(200).json(result)
});

module.exports = route