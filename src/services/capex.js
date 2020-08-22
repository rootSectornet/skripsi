'Order strict'; 
const CapexConfig = require('@models').capex_configs
const CapexFs = require('@models').capex_fs
const Capexlaporan = require('@models').capex_laporans 
const Row = require('@models').rows; 
var async = require('async');

var CapexService = function(){};

CapexService.allCapexFs = async function(body, user, cb){

  const company = await CapexConfig.findOne({
    attributes: ['id'], 
    where: { 
      company_id: user.company_id
    }
  }); 
  if(company==null){
    cb(204, {})
  }
  const res = await CapexFs.findAll({
    attributes: ['type'], 
    where: { 
      capex_config_id: company.id
    },
    group: ['type'],
    order: [['type', 'ASC']]
  });
  let datasObj = [];
  await Promise.all(
    res.map(async e => {
      let obj = {};
      obj.type = e.type; 
      await CapexFs.findAll({
        attributes: ['type','label'],
        where: {
          type: e.type,
          //capex_config_id: 1
        },
        group: ['label'],
        order: [['label', 'ASC']]
      }).then(async resx => {      
        obj.data = await labelFunction(resx)
      }) 
      //datasObj.push(obj);
      return obj;
    })
  ).then(res => {
    cb(null, res)
  })
  //cb(null, datasObj)
}

async function labelFunction(data){
  return await Promise.all(
    data.map(async e => {
      let obj = {};
      obj.label = e.label
      //hi.label = e.label
      let childs = await Capex.findAll({
        attributes: ['label','year', 'type'],
        where: {
          type: e.type,
          label: e.label
        },
        group: ['year'],
        order: [['year', 'ASC']]
      }).then(async resx => {      
        var label = e.label
        obj.cols = await getChildren(resx)
        obj.totals = await countChildren(data, label)
      })
      return obj
    })
  ).then(res => {
    return res
  }) 
}

async function countChildren(e, label){
  let total = 0
  await Promise.all(
    e.map(async k =>{
      if(k.label == label){
      let obj = {} 
    
      await CapexFs.findAll({
        attributes: ['value'],
        where: {
          type: k.type,
          label: k.label
        },
        //group: ['value'],
        //order: [['value', 'ASC']]
      }).then(async children_data => {
        children_data.map(children => {
          total += children.value
        })
      })
      }
    })
  )
  return total
}


// CONFIG CAPEX FS
CapexService.createCapexConfig = async function(body, user, cb) {
  let { mulai_konsesi, masa_konsesi } = body;
  const tw = ['tw1', 'tw2', 'tw3', 'tw4'];
  const month =  ["01","02","03","04","05","06","07","08","09","10","11","12"]
  const month_sub = ["rencana", "proyeksi", "realisasi"];
  const month_sub_january = ["rencana", "realisasi"];

  let bp = body.biaya_proyek;
  let fe = body.financial_fee;
  let loan = body.loan;
  let equity = body.equity;
  let idc = body.idc;

  // CAPEX FS
  let objResult = []
  bp.forEach(row => {   
    for(i=0; i<=parseInt(masa_konsesi); i++){ 
      tw.forEach(element => { 
        let obj = {}
        //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
        let lbl = row.label;
        obj.label = lbl;
        obj.year = mulai_konsesi+i;
        obj.sub = element;
        obj.type = 'biaya_proyek';
        obj.sheet = body.sheet;
        obj.value = 0; 
        objResult.push(obj) 
      });
    }
  });

  fe.forEach(row => {   
    for(i=0; i<=parseInt(masa_konsesi); i++){
      tw.forEach(element => { 
        let obj = {} 
        let lbl = row.label;
        obj.label = lbl;
        obj.year = mulai_konsesi+i;
        obj.sub = element;
        obj.type = 'fincance_fee';
        obj.sheet = body.sheet; 
        obj.value = 0;
        objResult.push(obj)
      }); 
    }
  });

  if(idc!=null){
    for(i=0; i<=parseInt(masa_konsesi); i++){
      tw.forEach(element => { 
        let obj = {} 
        obj.label = 'IDC (interest during construction)';
        obj.year = mulai_konsesi+i;
        obj.sub = element;
        obj.type = 'idc';
        obj.sheet = body.sheet; 
        obj.value = 0;
        objResult.push(obj)
      }); 
    }
  }

  // CAPEX FOR LAPORAM TAHUNAN/BULAN
  const total_arrays = [
    'total_biaya_proyek',
    'total_finance_fee',
    'total_idc',
    'total_biaya_investasi',
    'total_sumber_pendanaan',
    'total_equity',
    'total_loan'
  ];

  let objResultLaporan = []
  bp.forEach(row => {   
    for(i=0; i<=parseInt(masa_konsesi); i++){ 
      month.forEach(element => { 
        if(element=="01"){
          month_sub_january.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row.label;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = 'biaya_proyek';
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        } else {
          month_sub.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row.label;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = 'biaya_proyek';
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        }     
      });
    }
  });

  fe.forEach(row => {   
    for(i=0; i<=parseInt(masa_konsesi); i++){ 
      month.forEach(element => { 
        if(element=="01"){
          month_sub_january.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row.label;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = 'fincance_fee';
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        } else {
          month_sub.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row.label;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = 'fincance_fee';
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        }     
      });
    }
  });

  total_arrays.forEach(row => {    
    for(i=0; i<=parseInt(masa_konsesi); i++){ 
      month.forEach(element => { 
        if(element=="01"){
          month_sub_january.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = row;
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        } else {
          month_sub.forEach(element_sub => { 
            let obj = {}
            //console.log(bps.label + '==='+ mulai_konsesi+i + '--' + element); 
            let lbl = row;
            obj.label = lbl;
            obj.year = mulai_konsesi+i;
            obj.month = element;
            obj.sub = element_sub;
            obj.type = row;
            obj.sheet = body.sheet;
            obj.value = 0; 
            objResultLaporan.push(obj) 
          });
        }     
      });
    }
  });
  // END CAPEX LAPORAN

  //cb(null, objResultLaporan)
  
  var sequelize = CapexConfig.sequelize;
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const datas = body;
    datas.company_id = user.company_id
    datas.capex_fs = objResult
    datas.capex_laporans = objResultLaporan
    await CapexConfig.create(datas, {
      include: [CapexFs, Capexlaporan],
      transaction
    }).then((result) =>
      cb(null, {
        id: result.id
      })
    );
    await transaction.commit();
  } catch (e) {
    //console.log(e)
    if (e) await transaction.rollback();
    cb(e)
  } 

}
 
// UPDATE CAPEX FS
CapexService.updateCapexFs = async function(body, id, cb){
  const updates = body
  try { 
    CapexFs.findOne({
      where: { id: id }
    })
    .then(result => {
      return result.update(updates)
    })
    .then(updated => {
      cb(null, updated)
    })
    .catch((error) => { 
      cb(204, error);
    });
  } catch (e) { 
    cb(e)
  }
}

// UPDATE CAPEX LAPORAN
CapexService.updateCapexLaporan = async function(body, id, cb){
  const updates = body
  try { 
    Capexlaporan.findOne({
      where: { id: id }
    })
    .then(result => {
      return result.update(updates)
    })
    .then(updated => {
      cb(null, updated)
    })
    .catch((error) => { 
      cb(204, error);
    });
  } catch (e) { 
    cb(e)
  }
}


// CAPEX LAPORAN INPUT TAHUN?BULAN
CapexService.getCapexLaporan = async function(body, user, query, cb){
  const company = await CapexConfig.findOne({
    attributes: ['id'], 
    where: { 
      company_id: user.company_id
    }
  }); 
  if(company==null){
    cb(204, {})
  }
  const res = await Capexlaporan.findAll({
    attributes: ['type'], 
    where: { 
      capex_config_id: company.id
    },
    group: ['type'],
    order: [['type', 'ASC']]
  }); 
  await Promise.all(
    res.map(async e => {
      let obj = {};
      obj.type = e.type; 
      
      await Capexlaporan.findAll({
        attributes: ['type','label', 'year'],
        where: {
          type: e.type,
          year: query.year 
        },
        group: ['label'],
        order: [['type', 'ASC']]
      }).then(async resx => {
          //obj.data = resx
          obj.data = await labelFunctionLaporan(resx)
      });
      return obj; 
    })
  ).then(res => {
    cb(null, res)
  })
    
}

async function labelFunctionLaporan(data){
  let y = []
  return await Promise.all(
    data.map(async e => {
      let obj = {};
      obj.label = e.label
      //hi.label = e.label
      let childs = await Capexlaporan.findAll({
        attributes: ['label', 'month', 'type'],
        where: {
          type: e.type,
          label: e.label,
          year: e.year
        },
        group: ['month'],
        order: [['month', 'ASC']]
      }).then(async resx => {      
        var label = e.label
        obj.cols = await getChildrenLaporan(resx)
        //obj.totals = await countChildren(data, label)
      })
      //y.push(obj)
      return obj 
    })
  ).then(res => {
    return res
  })
  //return y; 
}

async function getChildrenLaporan(e){
  let h = []
  return await Promise.all(
    e.map(async k =>{
      let obj = {}
      obj.month = k.month
      let obj_children = {}
      let total = 0
      await Capexlaporan.findAll({
        attributes: ['sub', 'value'],
        where: {
          label: k.label,
          type: k.type,
          month: k.month
        },
        group: ['sub', 'value'],
        order: [['sub', 'ASC']]
      }).then(async children_data => {
        
        children_data.map(children => {
          total += children.value
        })

        obj_children = children_data
      })
      obj.childrens = obj_children; //await hoki2(e)
      //obj.sub_total = total
      //h.push(obj)
      return obj;
    })
  ).then(res => {
    return res
  })
  //return h
}
 
// CAPEX RESUME
CapexService.getCapexResume = async function(body, user, query, cb){
  const capex_config = await CapexConfig.findOne({
    attributes: ['id'], 
    where: { 
      company_id: user.company_id
    }
  }); 
  if(capex_config==null){
    cb(204, {})
  }
  var sequelize = CapexConfig.sequelize;
 
  const realisasi = await Capexlaporan.findAll({
    attributes: [[sequelize.fn('sum', sequelize.col('value')), 'total']],
    where: { 
      capex_config_id: capex_config.id,
      year: query.year
    }
  }); 
  cb(null, realisasi)  
}

// DELETE 
CapexService.delete = async (id, cb) => {
  CapexConfig.destroy({
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


module.exports = CapexService
