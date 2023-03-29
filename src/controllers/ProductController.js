const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
  // showAll é responsável por retornar todos os produtos em formato JSON. 
  // e da uma resposta res para enviar a lista de produtos em formato JSON.
  showAll: (req, res) => {
    res.json(products)
  },

  // showByID é responsável por retornar um produto específico com base no id fornecido na URL
  showById: (req, res) => {
    //const id faz uso da desestruturação e extrai o valor da propriedade id
    const { id } = req.params    
    const product = products.find(product => String(product.id) === id)
    if (product)
        return res.json(product)
    //retorna uma resposta de erro com um status HTTP 400 e uma mensagem informando que o produto não foi encontrado.
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  }, create: (req, res) => {
    products.push(req.body)
    res.json(products)
  },
  update: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products[productIndex] = req.body
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  delete: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

  /**
   * EJS
   */
  // Detail from one product

  // Detail do produto pela id
  // é responsável por renderizar a página de detalhes de um produto específico. 
  //ele extrai o id da requisição req e pesquisa na lista de produtos para encontrar um produto com um id correspondente.
	detailEJS: (req, res) => {

    //A variável id recebe o valor de req.params.id, que é o valor do id do produto passado pela solicitação do cliente. Em seguida, a função find é usada para procurar na matriz de produtos um objeto cuja propriedade id seja igual ao valor da variável id
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail', {
			product,
			toThousand
		})
	},
   // Create form product - View
   createFormEJS: (req, res) => {
    res.render('product-create-form')
  },
  // Create product
  createEJS: (req, res) => {
    let image = ''

    if (req.files[0] !== undefined) {
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }

    let newProduct = {
			id: Number(products[products.length - 1].id) + 1,
			...req.body,
      image: image
		}
    products.push(newProduct)
    res.redirect('estoque')
  },
  // Update form product - View
  updateFormEJS: (req, res) => {
    let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', { productToEdit })
  },
  // Update product
  updateEJS: (req, res) => {
    const { id } = req.params
    let image = ''
    const productIndex = products.findIndex(product => String(product.id) === id) // índice
    let productToEdit = products.find(product => product.id == id) // objeto
    
    // console.log('func ', req.files )
    if (productIndex != -1) {
      
      if (req.files[0] !== undefined) {
          image = req.files[0].filename
      } else {
          image = productToEdit.image
      }

      productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image
      }
             console.log('productedit ', productToEdit)
      products[productIndex] = productToEdit // atualiza

        res.redirect('/estoque')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  // Delete product
  deleteEJS: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        res.redirect('/estoque')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  }, showAllEJS: (req, res) => {
    res.render('estoque', { products, toThousand });
  }
};
module.exports = ProductController