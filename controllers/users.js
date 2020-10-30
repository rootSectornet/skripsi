const users = require("./../models").users;
const bcrypt = require("bcrypt");

class User{
    constructor(){
    }
    login(body){
        return new Promise(async function(resolve,reject){
            let {username,password} = body;
            users.findOne({
                where:{name:username}
            })
            .then(async (res)=>{
                if(res){
                    await bcrypt.compare(password,res.password,(err,isMatch)=>{
                        if(!err && isMatch){
                            console.log("berhasil")
                            resolve(res)
                        }else{
                            console.log("gagal")
                            reject("Your Password Is Wrong")
                        }
                    })
                }else{
                    reject("User Not Found !");
                }
            })
            .catch((e)=>reject(e))
        })
    }
}
module.exports = User;