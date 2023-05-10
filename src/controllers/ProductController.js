const{ validationResult } = require('express-validator')

const products = require('../database/products.json')

const {Product} = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
	detailEJS: async(req, res) => {

    const id = req.params.id

    try {
      const product = await Product.findByPk(id)

      res.render('detail', {
        product, toThousand
      })

    } catch (error) {
      res.status(400).json({error})
    }

	},
   
   createFormEJS: (req, res) => {
    res.render('product-create-form')
  },
  // Create product
  createEJS: async(req, res) => {
    let image = ''

    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('product-create-form', { errors: errors.mapped() }) // ou array()

    try {
      if (req.files[0] !== undefined) {
        image = req.files[0].filename
      } else {
        image = 'default-image.png'
      }
      
      let newProduct = {
        ...req.body,
        image: image
      }

      await Product.create(newProduct) // cria o registro no banco de dados

      res.redirect('/')
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update form product - View
  updateFormEJS: async (req, res) => {
    const id = req.params.id

    try {
      const productToEdit = await Product.findByPk(id)

      res.render('product-edit-form', { productToEdit })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update product
  updateEJS: async (req, res) => {
    const { id } = req.params
    let image = ''
    
    try {
      const productToEdit = await Product.findByPk(id)
    
      if (productToEdit != undefined) {
          if (req.files[0] !== undefined) {
              image = req.files[0].filename
          } else {
              image = productToEdit.image
          }

          let product = {
            ...req.body,
            image: image
          }

          await Product.update(
            product,
            {
              where: {
                id: id
              }
            }
          ) // atualiza o registro no banco de dados

          res.redirect('/estoque')
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }  
  },
  // Delete product
  deleteEJS: async(req, res) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados

      res.redirect('/estoque')
    } catch (error) {
      res.status(400).json({ error })
    }
  }, showAllEJS: async (req, res) => {
    try {
      const products = await Product.findAll()
      
      res.render('estoque', {
          products,
          toThousand
      });
  } catch (error) {
      res.status(400).json({error})
  }
  }
};
module.exports = ProductController