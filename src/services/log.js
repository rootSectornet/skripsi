'Order strict'; 
const Log = require('@models').log_activitys
const { Op } = require("sequelize");
const moment = require('moment-timezone')

var LogService = function(){};

LogService.all = function(body, cb){
  Log.findAll({
    attributes  : ['id','user_id','perusahaan_id','activity','log_time'],
    offset  : body.offset,
    limit : body.limit,
    where : getConditions(body),
    order : [['log_time','DESC']]
  }).then(logs => {
    const resObj = logs.map(el => {
      var a = el.toJSON()
      a['timeago'] = moment(el.log_time).fromNow(true)
      return a
    })
    cb(null,resObj)
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
  if(req.start){
    conditions.log_time = {
      [Op.gte]: req.start
    }
  }
  conditions.perusahaan_id = req.perusahaan_id
  return conditions
}



LogService.create = async (body,cb)=>{
  const {user_id,perusahaan_id,activity} = (body)
  const log_time = moment.tz('Asia/Jakarta').format('YYYY-MM-DD H:mm:ss')
  try{
    Log.create({
      user_id:user_id,
      perusahaan_id:perusahaan_id,
      activity:activity,
      log_time:log_time,
      active : 1
    })
    .then((result)=>{
      const resObj = Object.assign({
        id:result.id,
        user_id:result.user_id,
        perusahaan_id:result.perusahaan_id,
        activity:result.activity,
        log_time:moment(result.log_time).tz('Asia/Jakarta').format('YYYY-MM-DD H:mm:ss'),
        timeago:moment(result.log_time).fromNow(true)
      })
      cb(null,resObj)
    })
    .catch((error)=>cb(error))
  }catch(e){
    cb(e)
  }
}


LogService.put = async (body,id,cb)=>{
  const updates = body
  try{
    Log.findOne({
      where : {id:id}
    })
    .then(log =>{
      return log.update(updates)
    })
    .then(result =>{
      const resObj = Object.assign({
        id:result.id,
        user_id:result.user_id,
        perusahaan_id:result.perusahaan_id,
        activity:result.activity,
        log_time:moment(result.log_time).tz('Asia/Jakarta').format('YYYY-MM-DD H:mm:ss'),
        timeago:moment(result.log_time).fromNow(true)
      })
      cb(null,resObj)
    })
    .catch((error)=>cb(error))
  }catch(e){
    cb(e)
  }
}


LogService.delete = async (id,cb)=>{
  try{
    Log.destroy({
      where: {id:id}
    })
    .then(result=>{
      const resObj = Object.assign({
        message:result == 1 ? "Log was deleted successfully!" : `Cannot delete Log with id = ${id}. Maybe Log was not found!`,
      })
      cb(null,resObj)
    })
    .catch((error)=>cb(error))
  }catch(e){
    cb(e)
  }
}

 
module.exports = LogService