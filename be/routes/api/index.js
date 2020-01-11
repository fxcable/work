var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.all('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요'));
});


module.exports = router;
