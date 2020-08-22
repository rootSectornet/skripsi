const route = require('express').Router();
const HttpStatus = require('http-status-codes');   
const SetoranModalService = require('@services/setoran_modals');    
 


/**
 * @typedef SetoranModalHead
 * @property {integer} company_id.required -  anak perusahaan atau afiliasi id eg: 1
 * @property {integer} tahun.required - setoran modal di buat eg : 2020
 * @property {double} total.required - total porsi setoran modal eg : 100000.55
 */


/**
 * @typedef DataSetoranModal
 * @property {integer} id.required -  anak perusahaan atau afiliasi id eg: 1
 * @property {double} proyeksi.required - value of proyeksi eg : 100000.55
 * @property {double} realisasi.required - value of realisasi eg : 100000.55
 */

/**
 * GET Setoran Modal
 * @route GET /setoran_modals
 * @group Setoran Modal 
 * @param {integer} tahun.query.required - setoran modal di buat eg : 2020
 * @param {integer} company_id.query.required -  anak perusahaan atau afiliasi id eg: 1
 * @returns {object} 200 - object setoran modal
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/', async (req, res, next) => {
  await SetoranModalService.perYear(req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

/**
 * POST Setoran Modal
 * @route POST /setoran_modals
 * @group Setoran Modal
 * @param {SetoranModalHead.model}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/', async (req, res, next) => {
  await SetoranModalService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 


/**
 * PUT Setoran Modal
 * @route PUT /setoran_modals/{id}
 * @group Setoran Modal
 * @param {string} id.path.required - company_id
 * @param {Array.<DataSetoranModal>}  entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.put('/:id', async (req, res, next) => {
  await SetoranModalService.put(req.body,parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})


module.exports = route
