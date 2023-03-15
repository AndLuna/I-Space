var express = require('express');


//criando a const do controller
const homeController = require('../controllers/homeController');

var router = express.Router();



/* GET home page. */



router.get('/', homeController.home)

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
