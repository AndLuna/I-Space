var express = require('express');
const router = express.Router()
//criando a const do controller
const MainController = require('../controllers/MainController');



// # chamando a primeira pag (Main)
router.get('/', MainController.index);

//router.get('sobre', MainController.sobre);



//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

// router.get('sobre', function (req, res) {
//     res.render('sobre', MainController.sobre);
// })

module.exports = router;
