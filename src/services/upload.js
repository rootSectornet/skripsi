'use strict'  
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
var mkdirp = require('mkdirp');

const pathPublic = 'public'; // linux
//const pathPublic = './public'; // win

var UploadService = function () {};

function mkdir(dir) {
  fs.mkdir(dir, {
    recursive: true
  }, err => {
    return err;
  });
  return true;
}

function upload(type) {
  const typeFile = type.toLowerCase();
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        cb(null, path.join(pathPublic, typeFile));
        return;
      } else {
        return cb('Only jpg, jpeg, and png file are allowed', null);
      }
    },
    filename: (req, file, cb) => {
      const timestamp = moment().valueOf();
      const extName = path.extname(file.originalname);
      cb(null, typeFile + '-' + timestamp + extName);
    }
  });

  var upload = multer({
    storage: storage
  }).single('image');

  return upload;
}

UploadService.upload = function (req, type, cb) {
  const pathType = path.join(pathPublic, type);
  mkdirp(pathType, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
  });

  try {
    if (mkdir(pathType)) {
      const uploadFn = upload(type);
      uploadFn(req, cb, async (err) => {
        if (err) {
          cb(err);
          return;
        }
        let filename = req.file.filename;
        let obj = {
          filename: filename,
          path: pathType
        };
        cb(null, obj);
      });
    } else {
      cb('error create path', null);
      return;
    }
  } catch (error) {
    cb(error, null);
    return;
  }
};

module.exports = UploadService;