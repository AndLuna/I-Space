const { body } = require('express-validator')

var express = require('express');
const router = express.Router();

//criando a const do controller
const MainController = require('../controllers/MainController');
const PagesController = require('../controllers/PagesController');
const productController = require('../controllers/ProductController');



/**
 * Multer
 */


const upload = require('../middlewares/upload')
const log = require('../middlewares/log')
const auth = require('../middlewares/auth')


// # chamando a primeira pag (Main)
router.get('/', MainController.index);
// 

// GET - EJS Detail producto - View
router.get('/product/detail/:id', productController.detailEJS)
router.get('/productPage/:type', PagesController.productPage);
// GET - EJS Create Form - View
router.get('/product/create', auth , productController.createFormEJS)
router.get('/product/update/:id', auth, productController.updateFormEJS)
// POST - EJS Create
router.post(
  '/product', 
  auth,
  upload.any(), 
  body('name')
  .notEmpty()
  .withMessage('Nome do produto deve ser informado!'),
  productController.createEJS
  )
// PUT - EJS Update
router.put('/product/:id',auth, upload.any(), productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id',auth, productController.deleteEJS)


// # rota de paginas
router.get('/sobre',auth, PagesController.sobre);

router.get('/cadastro', PagesController.cadastro);

router.get('/login', PagesController.login)

// Rota para exibir a lista de produtos na página de estoque em EJS
router.get('/estoque', auth, productController.showAllEJS);

module.exports = router;
