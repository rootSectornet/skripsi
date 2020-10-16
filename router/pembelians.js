const route = require('express').Router();
const pembelians = require('./../controllers/pembelians')

route.post("/", async (req, res, next) => {
    let result = await pembelians.create(req.body)
    res
        .status(200)
        .json(result)
});

route.get("/", async (req, res, next) => {
    let result = await pembelians.getList()
    res
        .status(200)
        .json(result)
});

route.put("/", async (req,res,next) => {
    let result = await pembelians.update(req.body,req.params.id)
    res.status(200).json(result)
});

route.delete("/", async (req,res,next) => {
    let result = await pembelians.delete(req.params.id)
    res.status(200).json(result)
});

module.exports = route