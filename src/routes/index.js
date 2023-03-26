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
// GET - EJS Create Form - View
router.get('/product/create', productController.createFormEJS)
router.get('/product/update/:id', productController.updateFormEJS)
// POST - EJS Create
router.post('/product', productController.createEJS)
// PUT - EJS Update
router.put('/product/:id', productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id', productController.deleteEJS)


// # rota de paginas
router.get('/sobre', PagesController.sobre);

router.get('/cadastro', PagesController.cadastro);

router.get('/login', PagesController.login)



module.exports = router;
