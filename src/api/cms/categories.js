const route = require('express').Router();
const HttpStatus = require('http-status-codes');   
const CategoryService = require('@services/categories');    
 
/**
 * GET ALL Category
 * @route GET /categories
 * @group Category 
 * @param {integer} page.query - eg: 1
 * @param {integer} perPage.query - eg: 10, default:10 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/', async (req, res, next) => {
  await CategoryService.all(req.body, req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * GET Detail Category
 * @route GET /categories/{id}
 * @group Category 
 * @param {string} id.path.required - ID
 * @returns 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/:id', async (req, res, next) => {
  await CategoryService.get(req.body, parseInt(req.params.id), function (err, result) {
    if (err) {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    }
  })
})

/**
 * POST Category
 * @route POST /categories
 * @group Category
 * @param {string} code.formData.required - eg: C001, C002, dst
 * @param {string} name.formData.required - eg: Tol, Pembangkit Listrik 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/', async (req, res, next) => {
  await CategoryService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
/**
 * PUT Category
 * @route PUT /categories/{id}
 * @group Category
 * @param {string} id.path.required - ID
 * @param {string} code.formData - eg: PP01, PP02, dst
 * @param {string} name.formData - eg: PT ABC 
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.put('/:id', async (req, res, next) => {
  await CategoryService.put(req.body, parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})

 
/**
 * DELETE Category
 * @route DELETE /categories/{id}
 * @group Category
 * @param {string} id.path.required - ID
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.delete('/:id', async (req, res, next) => {
  await CategoryService.delete(parseInt(req.params.id), function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
module.exports = route
