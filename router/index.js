const route = require('express').Router();
const rijndael = require('./../controllers/rijndael');
/*
* authAcl ( authentication with access control routes )
* authPassport ( only authentication )
*/

let array = {
  'users': 'users',
  'warehouses': 'warehouses',
}

for (let item in array) {
  route.use('/' + array[item],(req,res,next)=>{
      console.log(req)
      if(req.method == 'POST'){
        req.body = JSON.parse(rijndael.decrypt(req.body))
      }
      next()
  }, require('./' + item));
}
route.use('/rijndael', require('./rijndael'));



module.exports = route
