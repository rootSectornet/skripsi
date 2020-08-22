const route = require('express').Router();
const HttpStatus = require('http-status-codes');   
const CompanyService = require('@services/companies');    
const middleware = require('@middlewares/middleware');  
const CompanySchema = require('@validations/companies');

/**
 * @typedef CompanyEntry     
 * @property {Array.<ProfitCenter>} company_shares
 * @property {Array.<User>} users
 * @property {integer} category_id - ID - eg: 1
 * @property {string}	name   
 * @property {string} npwp
 * @property {string} date_of_start - date - eg: 2020-02-18
 * @property {string} address
 */

 /**
 * @typedef ProfitCenter 
 * @property {integer} profit_center_id - Status values that need to be considered for filter - eg: 1
 * @property {integer} percentage - Some description for point - eg: 20
 */
  /**
 * @typedef User
 * @property {string} email - email - eg: user@mail.com
 * @property {string} password - password - eg: 123456
 */

 /**
 * GET Type Company
 * @route GET /companies
 * @group Company 
 * @param {string} type.query - eg: non-konsolidasi | konsolidasi | anak-perusahaan
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.get('/', async (req, res, next) => {
  await CompanyService.all(req.body, req.query, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 

/**
 * POST Capex
 * @route POST /companies
 * @group Company 
 * @param {CompanyEntry.model} entry.body
 * @returns {object} 200 - Success
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/', middleware(CompanySchema.POST), async (req, res, next) => {
  await CompanyService.create(req.body, function(err, result) {
    if(err){
      res.status(400).send(err);
    } else {
      res.status(HttpStatus.OK).json(result)
    } 
  })
})
 
module.exports = route
