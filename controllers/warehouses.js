const warehouses = require('./../models').warehouses

module.exports = {
    async getList(){
        return await warehouses.findAll()
    },
    create(body){
        const {code,alamat} = body
        return new Promise((resolve, reject) => {
            warehouses.create({
                code : code,
                alamat : alamat,
                status : 1
            }).then((res)=>{
                if(res){
                    resolve(res)
                }else{
                    reject("data tidak masuk")
                }
            }).catch((err)=>reject(err))
        });
    }
}

