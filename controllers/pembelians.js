const stocks = require('./../models').stocks
const pembelians = require('../models').pembelians

module.exports = {
    async getList(){
        return await pembelians.findAll()
    },
    create(body){
        const {stock_id,qty,harga,total} = body
        const { count, rows } = await stocks.findAndCountAll({
            attributes: ["no_faktur"],
        })
        const invNumNext = count + 1;
        return new Promise((resolve, reject) => {
            pembelians.create({
                no_po     : "PO-".invNumNext,
                stock_id  : stock_id,
                qty       : qty,
                harga     : harga,
                total     : total
            }).then((res)=>{
                if(res){
                    resolve(res)
                }else{
                    reject("data tidak masuk")
                }
            }).catch((err)=>reject(err))
        });
    },
    update(body,id){
        const {stock_id,qty,harga,total} = body
        return new Promise((resolve, reject) => {
            pembelians.findOne({
                where:{id:id},
                returning:true
            }).then((res) => {
                res.update({
                    no_po     : "PO-".invNumNext,
                    stock_id  : stock_id,
                    qty       : qty,
                    harga     : harga,
                    total     : total
                })
                resolve("Berhasil Update Data")
            }).catch((err)=>{
                reject("Gagal Update Data")
            })
        })
    },
    delete(id){
        return new Promise((resolve, reject) => {
            pembelians.destroy({
                where:{id:id}
            })
            .then((result) => {
                resolve("Berhasil Delete Data")
            })
            .catch((err) => {
                reject("Gagal Delete Data")
            })
        })
    }
}

