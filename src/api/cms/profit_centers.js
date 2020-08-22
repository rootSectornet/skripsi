const route = require('express').Router();
const HttpStatus = require('http-status-codes');   
const ProfitCenterService = require('@services/profit_centers');    
 
/**
 * GET ALL Profit Center
 * @route GET /profit-centers
 * @group Profit Center 
 * @param {integer} page.query - eg: 1
 * @param {integer} perPage.query - eg: 10, default:10 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */

route.get('/', async (req, res, next) => {
  await ProfitCenterService.all(req.body, req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * GET Detail Profit Center
 * @route GET /profit-centers/{id}
 * @group Profit Center 
 * @param {string} id.path.required - ID
 * @returns 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/:id', async (req, res, next) => {
  await ProfitCenterService.get(req.body, parseInt(req.params.id), function (err, result) {
    if (err) {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    }
  })
})

/**
 * GET Detail Profit Center
 * @route GET /profit-centers/type/{type}
 * @group Profit Center 
 * @param {string} type.path.required - eg: pp, non-pp
 * @returns 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/type/:type', async (req, res, next) => {
  await ProfitCenterService.getType(req.body, req.params.type, function (err, result) {
    if (err) {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    }
  })
})

/**
 * POST Profit Center
 * @route POST /profit-centers
 * @group Profit Center
 * @param {string} code.formData.required - eg: PP01, PP02, dst
 * @param {string} type.formData.required - eg: pp, non-pp
 * @param {string} name.formData.required - eg: PT ABC 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/', async (req, res, next) => {
  await ProfitCenterService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * PUT Profit Center
 * @route PUT /profit-centers/{id}
 * @group Profit Center
 * @param {string} id.path.required - ID
 * @param {string} code.formData - eg: PP01, PP02, dst
 * @param {string} name.formData - eg: PT ABC 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.put('/:id', async (req, res, next) => {
  await ProfitCenterService.put(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * DELETE Profit Center
 * @route DELETE /profit-centers/{id}
 * @group Profit Center
 * @param {string} id.path.required - ID
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.delete('/:id', async (req, res, next) => {
  await ProfitCenterService.delete(parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
module.exports = route
