const route = require('express').Router();
const HttpStatus = require('http-status-codes'); 
const middleware = require('@middlewares/middleware'); 
const LogSchema = require('@validations/log');
const LogService = require('@services/log');  


/**
 * @typedef LogActivityEntry
 * @property {integer} user_id.required - id user login
 * @property {integer} perusahaan_id.required - anak perusahaan atau afiliasi id
 * @property {string}  activity.required  - user activity
 */




/**
 * GET log_activities
 * @route GET /log
 * @group LOG 
 * @param {integer} id.query
 * @param {string} perusahaan_id.query.required - Description - eg: id_perusahaan
 * @param {string} user_id.query - Description - eg: user_id
 * @param {datetime} start.query - Description - eg: tanggal awal data log, format (yyyy-mm-dd)
 * @param {integer} offset.query.required - Description - eg: offset paging
 * @param {integer} limit.query.required - Description - eg: limit paging
 * @returns {object} 200 - An array of log
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.get('/',middleware(LogSchema.GET), async (req, res, next) => {
  await LogService.all(req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * POST log_activities
 * @route POST /log
 * @group LOG
 * @param {LogActivityEntry.model}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.post('/',middleware(LogSchema.POST), async (req, res, next) => {
  await LogService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 




/**
 * PUT log_activities
 * @route PUT /log/{id}
 * @group LOG
 * @param {string} id.path.required - id
 * @param {LogActivityEntry.model}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.put('/:id',middleware(LogSchema.POST), async (req, res, next) => {
  await LogService.put(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})


/**
 * DELETE log_activities
 * @route DELETE /log/{id}
 * @group LOG 
 * @param {string} id.path.required - id
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @returns {object} 422 - Error of validation parameter
 * @security JWT
 */
route.delete('/:id', async (req, res, next) => {
  await LogService.delete(parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 



module.exports = route
