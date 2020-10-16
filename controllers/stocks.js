const stocks = require('./../models').stocks

module.exports = {
    async getList(){
        return await stocks.findAll()
    },
    create(body){
        const {warehouse_id,stock} = body
        return new Promise((resolve, reject) => {
            stocks.create({
                warehouse_id : warehouse_id,
                stock        : stock,
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
        const{stock,warehouse_id} = body;
        return new Promise((resolve, reject) => {
            stocks.findOne({
                where:{id:id},
                returning:true
            }).then((res) => {
                res.update({
                    warehouse_id : warehouse_id,
                    stock        : stock,
                })
                resolve("Berhasil Update Data")
            }).catch((err)=>{
                reject("Gagal Update Data")
            })
        })
    },
    delete(id){
        return new Promise((resolve, reject) => {
            stocks.destroy({
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

