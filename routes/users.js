var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/halo', function(req, res, next) {
  res.send('respond with a resource halo');
});


module.exports = router;
