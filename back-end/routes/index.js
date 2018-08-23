var express = require('express');
var router = express.Router();
var response = require('../helpers/response.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/api', function(req, res, next) {
  response.jsonSuccess(res,[],"Good")
});

module.exports = router;
