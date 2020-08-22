const route = require('express').Router();
const HttpStatus = require('http-status-codes'); 
const middleware = require('@middlewares/middleware');  
const EquitySchema = require('@validations/shareholder');
const ShareholdersService = require('@services/shareholder');  


/**
 * @typedef Equity
 * @property {integer} user_id.required - id user login
 * @property {integer} perusahaan_id.required - anak perusahaan atau afiliasi id
 * @property {Array.<EquityDetail>} equity_details.required
 */


/**
 * @typedef EquityDetail
 * @property {integer} id - id of equity
 * @property {string} equity_item.required - item of equity field - eg : Total kebutuhan dana (Rp)
 * @property {string} equity_value.required - value of equity item - eg : 100.000.000.000
 */




/**
 * GET shareholder
 * @route GET /shareholder
 * @group Equity
 * @param {integer} id.query
 * @param {string} perusahaan_id.query - Description - eg: id_perusahaan
 * @param {string} user_id.query - Description - eg: user_id
 * @param {date} equity_date.query - Description - eg: tanggal pembuatan equity, format (yyyy-mm-dd)
 * @param {integer} offset.query.required - Description - eg: offset paging
 * @param {integer} limit.query.required - Description - eg: limit paging
 * @returns {object} 200 - An array of log
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.get('/',middleware(EquitySchema.GET), async (req, res, next) => {
  await ShareholdersService.all(req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * POST shareholder
 * @route POST /shareholder
 * @group Equity
 * @param {Equity.model}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.post('/',middleware(EquitySchema.POST), async (req, res, next) => {
  await ShareholdersService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 




/**
 * PUT shareholder
 * @route PUT /shareholder/{id}
 * @group Equity
 * @param {string} id.path.required - id
 * @param {Equity.model}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.put('/:id',middleware(EquitySchema.POST), async (req, res, next) => {
  await ShareholdersService.put(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})


/**
 * DELETE shareholder
 * @route DELETE /shareholder/{id}
 * @group Equity 
 * @param {string} id.path.required - id
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.delete('/:id', async (req, res, next) => {
  await ShareholdersService.delete(parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 



module.exports = route
