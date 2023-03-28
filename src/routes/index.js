var express = require('express');
const router = express.Router();
const multer = require('multer');

//criando a const do controller
const MainController = require('../controllers/MainController');
const PagesController = require('../controllers/PagesController');
const productController = require('../controllers/ProductController');
const usuariosController = require('../controllers/UsuariosController');

/**
 * Multer
 */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname)
    }
  })
  const upload = multer({ storage: storage })
  

// # chamando a primeira pag (Main)
router.get('/', MainController.index);


// GET - EJS Detail producto - View
router.get('/product/detail/:id', productController.detailEJS)
router.get('/productPage/:type', PagesController.productPage);
// GET - EJS Create Form - View
router.get('/product/create', productController.createFormEJS)
router.get('/product/update/:id', productController.updateFormEJS)
// POST - EJS Create
router.post('/product', upload.any(), productController.createEJS)
// PUT - EJS Update
router.put('/product/:id', upload.any(), productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id', productController.deleteEJS)


// # rota de paginas
router.get('/sobre', PagesController.sobre);

router.get('/cadastro', PagesController.cadastro);

router.get('/login', PagesController.login)



module.exports = router;
