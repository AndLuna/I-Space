const users = require('../database/usuarios.json')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserController = {
/*    mostrarId: (req,res) => {
        const { id } = req.params

        const showById = produtos.find(item => String(item.id) === id)

        if(showById){
        return res.render('detalhes', {showById})
        } else {
            res.redirect('/')
        }
    }, */
    viewCriarUsuario: (req, res) => {
        res.render('user/form')
    },
    criarUsuario: (req, res) => {

        const user = users.find(user => user.email === req.body.email) // verifica se o email ja é existente

        if(!user){

            let newUser = {
                id: Number(users[users.length - 1].id) + 1,
                ...req.body
            }

            const hash = bcrypt.hashSync(newUser.pwd, 10) // gera o hash da senha
            newUser.pwd = hash // salva na propriedade senha
            console.log(newUser)
            users.push(newUser)
            res.redirect('/')
        }else{
            res.render('user/form')
        }
},
    viewLogin: (req, res) => {
        res.render('login')
    },
    login: (req,res) => {
        const user = users.find(user => user.email === req.body.email)

        if(user && bcrypt.compareSync(req.body.pwd, user.pwd)){
            const token = jwt.sign({ id:user.id, email: user.email}, 'segredo')

            res.cookie('token', token, {maxAge:2592000000 }) // expira em 30 dias

            res.redirect('/')
        } else {
           res.render('login')
        }
    }

/*,
    viewEditarProduto:(req, res) => {
        const { id } = req.params

        const showById = produtos.find(item => String(item.id) === id)
        return res.render('editar-produto', {showById})
    },
    editarProduto: (req, res) => {
        const { id } = req.params
        
        const findIndexProduct = produtos.findIndex(item => String(item.id === id)) // encontrando indice do produto no array
        let showById = produtos.find(item => item.id == id) // encontrando produto no array

        if(findIndexProduct != -1){
            showById = {
                id: showById.id,
                name: req.body.name,
                price: req.body.price,
                marca: req.body.marca,
                image: showById.image,
                tamanhos: showById.tamanhos,
            }
            produtos[findIndexProduct] = showById
            res.redirect('/')
        }
    },

    deletarProduto: (req, res) => {
        const {id} = req.params

        const findIndexProduct = produtos.findIndex(item => String(item.id === id))
        
        if(findIndexProduct != -1){
            produtos.splice(findIndexProduct, 1)
            res.redirect('/')
        }
    } */
}

module.exports = UserController