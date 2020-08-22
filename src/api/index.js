const route = require('express').Router();
/*
* authAcl ( authentication with access control routes )
* authPassport ( only authentication )
*/
const { authAcl, authPassport } = require('../middlewares/acl');

let array = {
  'cms/profit_centers': 'cms/profit-centers',
  'cms/categories': 'cms/categories',
  'cms/capex': 'cms/capex',
  'cms/companies': 'cms/companies',
  'cms/roles': 'cms/roles',
  'cms/upload': 'cms/upload', 
}

for (let item in array) {
  route.use('/' + array[item], authPassport, require('./' + item));
}

route.use('/auth', require('./auth/index'));

module.exports = route