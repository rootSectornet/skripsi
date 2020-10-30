const warehouses = require("./../models").warehouses;
const products = require("./../models").products;
const detailpembelians = require("./../models").detailpembelians;
const detailpenjualans = require("./../models").detailpenjualans;
const penjualans = require("./../models").penjualans;
const pembelians = require("./../models").pembelians;
const db = require("./../models");
class Product{
    constructor(){
        this.sqlSelectAllStock = "SELECT SUM(IF((SELECT SUM(detailpembelians.jumlah) AS jumlah FROM `detailpembelians` WHERE detailpembelians.id_product = products.id ), ( SELECT SUM(detailpembelians.jumlah) AS jumlah FROM `detailpembelians` WHERE detailpembelians.id_product = products.id ), 0 ) - IF(( SELECT SUM(detailpenjualans.jumlah) AS jumlah FROM  `detailpenjualans` WHERE detailpenjualans.id_product = products.id ), ( SELECT SUM(detailpenjualans.jumlah) AS jumlah FROM `detailpenjualans` WHERE detailpenjualans.id_product = products.id), 0 )) AS jumlah,products.id,products.nama,warehouses.name FROM products INNER JOIN warehouses ON warehouses.id = products.id_warehouse GROUP by products.nama";
        this.sqlStock = (id)=>{
            return `SELECT (IF((SELECT SUM(detailpembelians.jumlah) AS jumlah FROM detailpembelians WHERE detailpembelians.id_product = products.id ), ( SELECT SUM(detailpembelians.jumlah) AS jumlah FROM detailpembelians WHERE detailpembelians.id_product = products.id ), 0 ) - IF(( SELECT SUM(detailpenjualans.jumlah) AS jumlah FROM  detailpenjualans WHERE detailpenjualans.id_product = products.id ), ( SELECT SUM(detailpenjualans.jumlah) AS jumlah FROM detailpenjualans WHERE detailpenjualans.id_product = products.id), 0 )) AS jumlah,products.id,products.nama,warehouses.name FROM products INNER JOIN warehouses ON warehouses.id = products.id_warehouse WHERE warehouses.id =${id}`;
        }
    }
    getAllStock(){
        return new Promise(function(resolve,reject){
            db.sequelize.query(this.sqlSelectAllStock,{
                type: db.sequelize.QueryTypes.SELECT,
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
    getStock(body){
        return new Promise(function(resolve,reject){
            let {id_warehouse} = body
            db.sequelize.query(this.sqlStock(id_warehouse),{
                type: db.sequelize.QueryTypes.SELECT,
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
}
module.exports = Product;