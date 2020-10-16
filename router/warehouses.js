const route = require('express').Router();
const warehouses = require('./../controllers/warehouses')

route.post("/", async (req, res, next) => {
    let result = await warehouses.create(req.body)
    res
        .status(200)
        .json(result)
});

route.get("/", async (req, res, next) => {
    let result = await warehouses.getList()
    res
        .status(200)
        .json(result)
});

module.exports = route