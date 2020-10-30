const warehouses = require("./../models").warehouses;

class Warehouse{
    constructor(){
    }
    data(){
        return new Promise(function(resolve,reject){
            warehouses.findAll()
            .then((res)=>{
                if(res){
                    resolve(res)
                }else{
                    reject("data not Found!");
                }
            })
            .catch((e)=>reject(e))
        })
    }
}
module.exports = Warehouse;