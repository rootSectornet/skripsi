const warehouses = require("./../models").warehouses;
const products = require("./../models").products;
const detailpembelians = require("./../models").detailpembelians;
const detailpenjualans = require("./../models").detailpenjualans;
const penjualans = require("./../models").penjualans;
const pembelians = require("./../models").pembelians;
const db = require("./../models");
class Transaction{
    constructor(){
        this.sqlPenjualan = (id)=>{
            if(id == "ALL"){
                return "SELECT penjualans.id,penjualans.tanggal,warehouses.name FROM penjualans INNER JOIN warehouses on warehouses.id = penjualans.id_warehouse";
            }else{
                return `SELECT penjualans.id,penjualans.tanggal,warehouses.name FROM penjualans INNER JOIN warehouses on warehouses.id = penjualans.id_warehouse WHERE warehouses.id =${id}`;
            }
        }
        this.sqlPembelians = (id)=>{
            if(id == "ALL"){
                return "SELECT pembelians.id,pembelians.tanggal,warehouses.name FROM pembelians INNER JOIN warehouses on warehouses.id = pembelians.id_warehouse";
            }else{
                return `SELECT pembelians.id,pembelians.tanggal,warehouses.name FROM pembelians INNER JOIN warehouses on warehouses.id = pembelians.id_warehouse WHERE warehouses.id =${id}`;
            }
        }
    }
    getPenjualan(body){
        return new Promise(function(resolve,reject){
            let {id_warehouse} = body
            db.sequelize.query(this.sqlPenjualan(id_warehouse),{
                type: db.sequelize.QueryTypes.SELECT,
            })
            .then(async (res)=>{
                if(res){
                    res = await Promise.all(res.map(async (item)=>{
                        var { count } = await detailpenjualans.findAndCountAll({
                            where: {
                                id_penjualan: item.id
                            }
                          });
                        return {
                            id : item.id,
                            tanggal : item.tanggal,
                            warehouse : item.name,
                            total : count
                        }
                    }));
                    resolve(res)
                }else{
                    resolve([])
                }
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
    getPembelian(body){
        return new Promise(function(resolve,reject){
            let {id_warehouse} = body
            db.sequelize.query(this.sqlPembelians(id_warehouse),{
                type: db.sequelize.QueryTypes.SELECT,
            })
            .then(async (res)=>{
                if(res){
                    res = await Promise.all(res.map(async (item)=>{
                        var { count } = await detailpembelians.findAndCountAll({
                            where: {
                                id_pembelian: item.id
                            }
                          });
                        return {
                            id : item.id,
                            tanggal : item.tanggal,
                            warehouse : item.name,
                            total : count
                        }
                    }));
                    resolve(res)
                }else{
                    resolve([])
                }
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
    detailPenjualan(body){
        return new Promise(function(resolve,reject){
            let {id_penjualan} = body
            penjualans.findOne({
                where : {
                    id : id_penjualan
                },
                include: [
                    {
                      model: detailpenjualans,
                      attributes: ["jumlah"],
                      include : [
                         {
                             model : products,
                             attributes: ["nama"],
                         }
                      ]
                    },
                    {
                      model: warehouses,
                      attributes: ["name"],
                    },
                  ],
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
    detailPembelian(body){
        return new Promise(function(resolve,reject){
            let {id_pembelian} = body
            pembelians.findOne({
                where : {
                    id : id_pembelian
                },
                include: [
                    {
                      model: detailpembelians,
                      attributes: ["jumlah"],
                      include : [
                         {
                             model : products,
                             attributes: ["nama"],
                         }
                      ]
                    },
                    {
                      model: warehouses,
                      attributes: ["name"],
                    },
                  ],
            })
            .then((res)=>{
                resolve(res)
            })
            .catch((e)=>reject(e))
        }.bind(this))
    }
}
module.exports = Transaction;