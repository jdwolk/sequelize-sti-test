var express = require('express');
var router = express.Router();

var Transactor = require('../models').transactor;
Transactor.sync().then(function() {
  // Table created
  return Transactor.create({
    firstName: 'John'
  });
});

/* GET transactors listing. */
router.get('/', function(req, res, next) {
  Transactor.all().then(function(stuff) {
    res.send(stuff);
  });
});

module.exports = router;
