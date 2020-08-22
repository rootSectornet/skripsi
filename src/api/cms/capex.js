const route = require('express').Router();
const HttpStatus = require('http-status-codes');   
const CapexService = require('@services/capex');    
const middleware = require('@middlewares/middleware');  
const CapexSchema = require('@validations/capex');

/**
 * @typedef ConfigEntry    
 * @property {integer}	mulai_konsesi - Year - eg: 2020 
 * @property {integer}	masa_konsesi - Digit - eg: 2
 * @property {string}	spmk 
 * @property {Array.<Bp>}  biaya_proyek - Title - eg: Biaya ABCD
 * @property {Array.<Bp>}  financial_fee - Title - eg: Finansial ABC
 * @property {string} sheet
 * @property {integer} idc
 * @property {integer} loan
 * @property {integer} equity
 */
/**
 * @typedef Bp
 * @property {string} label - Title - eg: Inputan 1
 */

/**
 * POST Capex CONFIG.........edited..
 * @route POST /capex/config
 * @group Config Capex 
 * @param {ConfigEntry.model} entry.body
 * @returns {object} 200 - Success 
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/config', middleware(CapexSchema.POST), async (req, res, next) => {
  await CapexService.createCapexConfig(req.body, req.user, function(err, result) {
    if(err){  
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 

/**
 * PUT Capex FS
 * @route PUT /capex/capex_fs/{id}/update
 * @group Config Capex 
 * @param {string} id.path.required - ID
 * @param {string} value.formData - eg: 10, 20, dst
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.put('/capex_fs/:id/update', async (req, res, next) => {
  await CapexService.updateCapexFs(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * PUT Capex FS
 * @route PUT /capex/capex_laporan/{id}/update
 * @group Config Capex 
 * @param {string} id.path.required - ID
 * @param {string} value.formData - eg: 10, 20, dst
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.put('/capex_laporan/:id/update', async (req, res, next) => {
  await CapexService.updateCapexLaporan(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * DELETE Capex Config
 * @route DELETE /capex/capex_config/{id}
 * @group Config Capex
 * @param {string} id.path.required - ID
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.delete('/capex_config/:id', async (req, res, next) => {
  await CapexService.delete(parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * GET Capex FS
 * @route GET /capex/capex_fs
 * @group Config Capex 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/capex_fs', async (req, res, next) => {
  await CapexService.allCapexFs(req.body, req.user, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * GET Capex Laporan................
 * @route GET /capex/capex_laporan
 * @group Config Capex 
 * @param {string} year.query.required - year - eg: 2020
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/capex_laporan', async (req, res, next) => {
  await CapexService.getCapexLaporan(req.body, req.user, req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * GET Capex Resume
 * @route GET /capex/capex_resume
 * @group Config Capex 
 * @param {string} year.query.required - year - eg: 2020
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/capex_resume', async (req, res, next) => {
  await CapexService.getCapexResume(req.body, req.user, req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})


module.exports = route
