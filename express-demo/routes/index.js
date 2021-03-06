var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', userAccess: true });
});

router.get('/test/:id', function(req, res, next) {
  res.render('test', { output: req.params.id })
});

router.post('/test/submit', function(req, res, next) {
  var id = req.body.userId;
  res.redirect('/test/' + id)
});

module.exports = router;
