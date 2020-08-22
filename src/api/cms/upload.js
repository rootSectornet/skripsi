const route = require('express').Router();
const HttpStatus = require('http-status-codes');
const UploadService = require('@services/upload');
const Company = require('@models').companies

/**
 * Upload File
 * @route POST /upload/{type}
 * @group Company
 * @param {string} type.path - type: company
 * @param {string} relation.query - eg: ID from company_id
 * @param {string} field.query - eg: logo | image
 * @param {file} image.formData.required - File image
 * @returns {object} 201 - Created
 * @returns {object} 400 - Error
 * @security JWT
 */
route.post('/:type', async (req, res) => {

  const type = req.params.type.toLowerCase();
  const relation = req.query.relation
  const field = req.query.field;

  if (type == '{type}') {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: 'type is not empty'
    });
  }
  if (type == 'undefined') {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: 'type is not empty'
    });
  }

  try {
    await UploadService.upload(req, type, async (err, result) => {
      if (err) {
        console.log(err);
        res.status(HttpStatus.BAD_REQUEST).json({
          error: err
        });
      } else {
        const path = result.path;
        const filename = result.filename;
        
        const body = []
        if(field=='logo'){
          body.logo = filename
        }
        else if(field=='image'){
          body.image = filename
        }
        // update company
        try { 
          Company.findOne({
            where: { id: relation }
          })
          .then(result => {
            if(result==null){
              res.status(HttpStatus.NO_CONTENT).json({});
            }
            return result.update(body)
          })
          .then(updated => {
            res.status(HttpStatus.CREATED).json(updated);
            //cb(null, updated)
          })
          .catch((error) => { 
            //cb(error);
          });
        } catch (e) { 
          //cb(e)
        }

      }
    });
  } catch (error) {
    res.send(error);
  }

});

module.exports = route;