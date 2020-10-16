const express = require('express'); 
const helmet  = require('helmet');
const bodyParser = require('body-parser');
const path = require('path'); 
var app = express();

app.use(express.json());
app.use(express.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

const hostname = "localhost";
const port = 3000;
const routes = require('./router');

app.use('/api', routes);

app.listen(port, hostname, () =>
  console.log(`Your port is ${hostname} ${port}`),
); 




module.exports = app;
