'Order strict'; 
var Helper = require("@helpers/pagination");
const ProfitCenter = require('@models').profit_centers

var ProfitCenterService = function(){};

// ALL
ProfitCenterService.all = function(body, query, cb){
  let page = query.page || 1;
  let limit = parseInt(query.perPage) || 10
  ProfitCenter.findAndCountAll({ 
    offset: Helper.pagyOffset(limit, page),
    limit: limit,
    order: [['id', 'DESC']]
  }).then(result => {

    const countTotal = result.count;
    const resObj = result.rows.map(row => {  
      return (
        { 
          id: row.id,
          code: row.code,
          type: row.type,
          name: row.name
        }
      )
    }) 
    results = { 
      results: resObj,
      pagination: Helper.pagination(countTotal,limit)
    }
    cb(null,results) 

  }).catch((error) => {  
    cb(error)
  });
}

// GET
ProfitCenterService.get = function(body, id, cb){ 
  ProfitCenter.findOne({
    where: { id: id }
  }).then(row => { 
    if(row==null) { 
      cb(204, {}) 
    }
    const resObj = { 
      id: row.id, 
      code: row.code,
      type: row.type,
      name: row.name,
    } 
    cb(null,resObj) 

  }).catch((error) => {  
    //console.log(error) 
    cb(error)
  });
}

// GET TYPE
ProfitCenterService.getType = function(body, type, cb){ 
  ProfitCenter.findAndCountAll({
    where: { type: type  }
  }).then(rows => {  
    if(rows.count==0) { 
      cb(204, {}) 
    }
    const resObj = rows.rows.map(row => {  
      return ({
        id: row.id, 
        code: row.code,
        type: row.type,
        name: row.name
      })
    }) 
    cb(null,resObj) 

  }).catch((error) => {  
    //console.log(error) 
    cb(error)
  });
}
 
//POST
ProfitCenterService.create = async function(body, cb) {
  try { 
    ProfitCenter.create(body)
    .then((result) => cb(null,result))
    .catch((error) => { 
      cb(error);
    });
  } catch (e) { 
    cb(e)
  }
}

//PUT
ProfitCenterService.put = async function(body, id, cb) {
  const updates = body
  try { 
    ProfitCenter.findOne({
      where: { id: id }
    })
    .then(result => {
      return result.update(updates)
    })
    .then(updated => {
      cb(null, updated)
    })
    .catch((error) => { 
      cb(error);
    });
  } catch (e) { 
    cb(e)
  }
}

// DELETE 
ProfitCenterService.delete = async (id, cb) => {
  ProfitCenter.destroy({
    where: {
      id: id
    }
  }).then(result => {
    cb(null,{
      success: Boolean(parseInt(result.toString()))
    }) 
  }).catch(err => {
    cb(err, null);
  });
}


module.exports = ProfitCenterService