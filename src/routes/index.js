var express = require('express');
const router = express.Router()
//criando a const do controller
const MainController = require('../controllers/MainController');
const PagesController = require('../controllers/PagesController');
const productController = require('../controllers/ProductController')



// # chamando a primeira pag (Main)
router.get('/', MainController.index);


// GET - EJS Detail producto - View
router.get('/product/detail/:id', productController.detailEJS)
router.get('/productPage/:type', PagesController.productPage);


// # rota de paginas
router.get('/sobre', PagesController.sobre);





module.exports = router;
