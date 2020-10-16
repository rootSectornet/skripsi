const stocks = require('../models').stocks
const penjualans = require('../models').penjualans

module.exports = {
    async getList(){
        return await penjualans.findAll()
    },
    create(body){
        const {stock_id,qty,harga,total} = body
        const { count, rows } = await stocks.findAndCountAll({
            attributes: ["no_faktur"],
        })
        const invNumNext = count + 1;
        return new Promise((resolve, reject) => {
            penjualans.create({
                no_faktur : "F-".invNumNext,
                stock_id  : stock_id,
                qty       : qty,
                harga     : harga,
                total     : total
            }).then((res)=>{
                stocks.findOne({
                    where:{id:stock_id},
                    returning:true
                })
                .then((result) => {
                    result.update({
                        stock : stock - total
                    })
                })

                if(res){
                    resolve(res)
                }else{
                    reject("data tidak masuk")
                }
            }).catch((err)=>reject(err))
        });
    },
    update(body,id){
        const{stock_id,qty,harga,total} = body;
        return new Promise((resolve, reject) => {
            penjualans.findOne({
                where:{id:id},
                returning:true
            }).then((res) => {
                res.update({
                    stock_id  : stock_id,
                    qty       : qty,
                    harga     : harga,
                    total     : total
                })
                .then((result) => {
                    stocks.findOne({
                        where:{id:stock_id},
                        returning:true
                    })
                    .then((result) => {
                        result.update({
                            stock : stock - total
                        })
                    })
                })
                resolve("Berhasil Update Data")
            }).catch((err)=>{
                reject("Gagal Update Data")
            })
        })
    },
    delete(id){
        return new Promise((resolve, reject) => {
            penjualans.destroy({
                where:{id:id}
            })
            .then((result) => {
                stocks.findOne({
                    where:{id:stock_id},
                    returning:true
                })
                .then((res) => {
                    res.update({
                        stock : stock - total
                    })
                })
                resolve("Berhasil Delete Data")
            })
            .catch((err) => {
                reject("Gagal Delete Data")
            })
        })
    }
}

