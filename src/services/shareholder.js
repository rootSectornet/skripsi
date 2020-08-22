'Order strict'; 
const Shareholders = require('@models').shareholders
const ShareholdersDetail = require('@models').shareholders_details
const { Op } = require("sequelize");
const moment = require('moment-timezone')

var ShareholdersService = function(){};

ShareholdersService.all = function(body, cb){
  Shareholders.findAll({
    attributes  : ['id','user_id','perusahaan_id','equity_date'],
    offset  : body.offset,
    limit : body.limit,
    where : getConditions(body),
    order : [['equity_date','DESC']],
    include :[
        {
            model:ShareholdersDetail,
            attributes:['id','equity_item','equity_value']
        }
    ]
  }).then(result => {
    cb(null,result)
  }).catch((error) => {
    cb(error)
  })
}


function getConditions(req){
  var conditions = {};
  //query param id
  if(req.id){
    conditions.id = req.id
  }
  if(req.user_id){
    conditions.user_id = req.user_id
  }
  if(req.equity_date){
    conditions.equity_date = req.equity_date
  }
  if(req.perusahaan_id){
    conditions.perusahaan_id = req.perusahaan_id
  }
  return conditions
}



ShareholdersService.create = async (body,cb)=>{
  try{
    Shareholders.create({
      user_id:body.user_id,
      perusahaan_id:body.perusahaan_id,
      equity_date:moment.tz('Asia/Jakarta').format('YYYY-MM-DD'),
      shareholders_details:body.equity_details,
    },{
        include:[
            {
                model:ShareholdersDetail
            }
        ]
    }
    )
    .then((result)=>{
      const resObj = Object.assign({
        id:result.id,
        user_id:result.user_id,
        perusahaan_id:result.perusahaan_id,
        equity_date:moment(result.equity_date).tz('Asia/Jakarta').format('YYYY-MM-DD'),
        equity_details:result.shareholders_details.map(detail =>{
            return (
                {
                    id:detail.id,
                    equity_item:detail.equity_item,
                    equity_value:detail.equity_value
                }
            )
        })
      })
      cb(null,resObj)
    })
    .catch((error)=>cb(error));
  }catch(e){
    if (e) await transaction.rollback();
    cb(e)
  }
}


ShareholdersService.put = async (body,id,cb)=>{
  const updates = body
  try{
    Shareholders.findOne({
      where : {id:id},
      include :[
          {
              model:ShareholdersDetail,
          }
      ]
    })
    .then(equity =>{
        updates.equity_details.map(detail => {
          ShareholdersDetail.findOne({
            where : {id:detail.id}
          }).then(result => {
            return result.update(detail)
          })
        })
        return equity.update(updates)
    })
    .then(result =>{
        const resObj = Object.assign({
            id:result.id,
            user_id:result.user_id,
            perusahaan_id:result.perusahaan_id,
            equity_date:moment(result.equity_date).tz('Asia/Jakarta').format('YYYY-MM-DD'),
            equity_details:result.shareholders_details.map(detail =>{
                return (
                    {
                        id:detail.id,
                        equity_item:detail.equity_item,
                        equity_value:detail.equity_value
                    }
                )
            })
          })
      cb(null,resObj)
    })
    .catch((error)=>cb(error))
  }catch(e){
    cb(e)
  }
}


ShareholdersService.delete = async (id,cb)=>{
  try{
    Shareholders.destroy({
      where: {id:id}
    })
    .then(result=>{
      const resObj = Object.assign({
        message:result == 1 ? "Shareholders was deleted successfully!" : `Cannot delete Shareholders with id = ${id}. Maybe Shareholders was not found!`,
      })
      cb(null,resObj)
    })
    .catch((error)=>cb(error))
  }catch(e){
    cb(e)
  }
}

 
module.exports = ShareholdersService