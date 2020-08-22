'Order strict'; 
const Setoranmodel = require('@models').setoran_modals
const CompanyShare = require('@models').company_shares
const ProfitCenter = require('@models').profit_centers
const moment = require('moment-timezone')


var sequelize = Setoranmodel.sequelize;

var SetoranModalService = function(){};


//get form per year
SetoranModalService.perYear = function(body,cb){
  const { tahun,company_id } = (body);
  let response = {}
  response.totalshare = 0
  response.totalporsi = 0
  response.totalofalldata = []
  response.setorandata = []
  CompanyShare.findAll({
    attributes  : ['id','percentage'],
    where : { company_id: company_id },
    include : [{
      model : ProfitCenter,
      attributes : ['code','name'],
      as : 'profit_company'
    },
    {
      model : Setoranmodel,
      attributes : ['id','rencana','realisasi','proyeksi','month_year'],
      where : sequelize.where(sequelize.fn('YEAR', sequelize.col('month_year')), tahun),
      order : [['month_year','ASC']],
    }
  ]
  }).then(result => {
    result.forEach(profit =>{
         let tmp =  {
            pemegang_saham : `${profit.profit_company.code} - ${profit.profit_company.name}`,
            share : profit.percentage,
            porsi : profit.setoran_modals.map(item => item.rencana).reduce((a,b)=>a+b),
            form : profit.setoran_modals.map(item => {
              return (
                {
                  month : moment(item.month_year).tz('Asia/Jakarta').format('MMMM'),
                  data :
                  {
                      id:item.id,
                      rencana:item.rencana,
                      proyeksi:item.proyeksi,
                      realisasi:item.realisasi
                  }
                }
              )
            })
          }
        response.setorandata.push(tmp)
        response.totalshare += profit.percentage
        response.totalporsi += profit.setoran_modals.map(item => item.rencana).reduce((a,b)=>a+b)
        response.totalofalldata = []
      })
    cb(null,response)
  }).catch((error) => {
    cb(error)
  })


}




// init Create Setoran modal
SetoranModalService.create =  function(body, cb){
  const { tahun, company_id, total } = (body);
  let objSetoranModal = []
  CompanyShare.findAll({
    attributes  : ['id','percentage'],
    where : { company_id: company_id },
    order : [['percentage','DESC']],
    include : [{
      model : ProfitCenter,
      attributes : ['code','name'],
      as : 'profit_company'
    }]
  }).then( async (profit) => {
      profit.forEach((item) => {
        let porsi_profit_center = (item.percentage * total) / 100;
        for (let index = 1; index <= 12; index++) {
          let rencana = porsi_profit_center / 12;
          let obj = {
            company_share_id : item.id,
            rencana : rencana,
            realisasi : 0,
            proyeksi : 0,
            month_year : moment(`${tahun}-${index}-01`).tz('Asia/Jakarta').format('YYYY-MM-DD')
          }
          objSetoranModal.push(obj)
        }

      });

      let transaction;
      try {
        transaction = await sequelize.transaction();
        await Setoranmodel.bulkCreate(objSetoranModal, {
          transaction
        }).then((result) =>{
          SetoranModalService.perYear({tahun:tahun,company_id:company_id},cb)
        });
        await transaction.commit();
      } catch (e) {
        console.log(e)
        if (e) await transaction.rollback();
        cb(e)
      }
  }).catch((error) => {
    cb(error)
  })
}

SetoranModalService.put = async function(body,id,cb){
  const updates = body
  
  let transaction;
  try {
    transaction = await sequelize.transaction();
    await Setoranmodel.bulkCreate(updates, {
      updateOnDuplicate : ['realisasi','proyeksi'],
      transaction
    }).then((result) =>{
      SetoranModalService.perYear({tahun:moment(result[0].month_year).tz('Asia/Jakarta').format('YYYY'),company_id:id},cb)
    });
    await transaction.commit();
  } catch (e) {
    console.log(e)
    if (e) await transaction.rollback();
    cb(e)
  }
}


module.exports = SetoranModalService