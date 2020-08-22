'Order strict'; 
var Helper = require("@helpers/pagination");
const Category = require('@models').categories
const Company = require('@models').companies

var CategoryService = function(){};

// ALL
CategoryService.all = async function(body, query, cb){
  let page = query.page || 1;
  let limit = parseInt(query.perPage) || 10

  let categories = await Category.findAndCountAll({ 
    offset: Helper.pagyOffset(limit, page),
    limit: limit,
    order: [['id', 'DESC']]
  });
  const countTotal = categories.count;
  await Promise.all(
    categories.rows.map(async row => {
      let obj = {}
      let id = row.id
      obj.id = id
      obj.code = row.code
      obj.name = row.name
      await Company.count({
        where: { category_id: id }
      }).then(row => {  
        obj.count = row
      })
      return obj;
    })
  ).then(res => { 
    results = { 
      results: res,
      pagination: Helper.pagination(countTotal,limit)
    }
    cb(null,results) 
  }).catch((error) => {  
    cb(error)
  });
}
 
// GET
CategoryService.get = function(body, id, cb){ 
  Category.findOne({
    where: { id: id }
  }).then(row => {
    if(row==null) { 
      cb(204, {}) 
    }
    const resObj = { 
      id: row.id, 
      code: row.code,
      name: row.name,
    } 
    cb(null,resObj) 

  }).catch((error) => {  
    cb(error)
  });
}
 
//POST
CategoryService.create = async function(body, cb) {
  try { 
    Category.create(body)
    .then((result) => cb(null,result))
    .catch((error) => { 
      cb(error);
    });
  } catch (e) { 
    cb(e)
  }
}

//PUT
CategoryService.put = async function(body, id, cb) {
  const updates = body
  try { 
    Category.findOne({
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
CategoryService.delete = async (id, cb) => {
  Category.destroy({
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


module.exports = CategoryService