var express = require('express');
var router = express.Router();

var Transactor = require('./models').transactor;
Transactor.sync({ force: true }).then(function() {
  // Table created
  return Transactor.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

/* GET transactors listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
