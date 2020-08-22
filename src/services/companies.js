'Order strict'; 
const User = require('@models').users
const Company = require('@models').companies
const CompanyShare = require('@models').company_shares
const CompanyYear = require('@models').company_years
const ProfitCenter = require('@models').profit_centers


var CompanyService = function(){};
// GET
CompanyService.all = function(body, query, cb){ 
   cb(null, query)
}
CompanyService.create = async function(body, cb) {
  let { name, company_shares } = body; 
  let profit_center_id = company_shares[0].profit_center_id;
  let year_default = new Date().getFullYear();
  let objResult = [];
  const profitCode = ProfitCenter.findOne({
    where: { id: profit_center_id }
  }).then(row => { 
    if(row==null) {
      cb(204, {})
    } 
    return {
      code: row.code.toString()
    }
  })
  const companyCount = Company.count({
    where: { year: year_default }
  }).then(row => {  
    return {
      count: row
    }
  })
  await Promise.all([profitCode, companyCount]).then(response => objResult.push(response)); 

  let obj = objResult[0];
  let total = obj[1].count; 
  
  let profit_center_code = obj[0].code; 
  let count = total;
  let year = year_default.toString().substr(-2); 
  let num = parseInt(count, 10) + 1;
  let zeroFilled = ('000' + num).substr(-3);
  let format_code = 'I'+profit_center_code+year+zeroFilled;
  let full_name = format_code+'. '+name; 
  
  var sequelize = Company.sequelize;
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const datas = body;
    datas.name = full_name; // format name ( IPP0120001 )
    datas.code = format_code;
    datas.year = year_default;
    await Company.create(datas, {
      include: [User, CompanyShare],
      transaction
    }).then((result) =>

      // sent email
      
      cb(null, {
        id: result.id
      })
    );
    await transaction.commit();
  } catch (e) {
    if (e) await transaction.rollback();
    cb(e)
  }
}


module.exports = CompanyService