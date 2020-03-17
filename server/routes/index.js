var express = require('express');
var router = express.Router();
// const {
//   MongoClient,
//   url,
//   maps,
//   dbName
// } = require('./mongodb');


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.send('<div>123<div>');
  // res.setHeader('fjewfjwfw');
  next();
});

router.get('/user', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.send({ 'key': '3' });
  next();
});

router.post('/user', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  const { body } = req.body;
  res.send('fefe');
  console.log(body);

});

module.exports = router;
