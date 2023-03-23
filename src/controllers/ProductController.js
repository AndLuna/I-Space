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
  },

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
	}
}
module.exports = ProductController