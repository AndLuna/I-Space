const { validationResult } = require('express-validator')
const users = require('../database/usuarios.json')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models')

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
    criarUsuario: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            res.render('user/form', { errors: errors.mapped() }) // ou array()
    
        try {
          const user = await User.findOne({
            where: {
              email: req.body.email
            }
          }) 
    
          if (!user) {
              let newUser = {
                ...req.body
              }
              
    
              const hash = bcrypt.hashSync(newUser.pwd, 10) 
              newUser.pwd = hash 
              await User.create(newUser) 
    
              res.redirect('/')
          } else res.render('user/form', { errors: [{ msg: "Usuário já cadastrado!" }] })
        } catch (error) {
          res.status(400).json({ error })
        }
      },
    viewLogin: (req, res) => {
        res.render('login')
    },
    login: async (req, res) => {
        try {
          const user = await User.findOne({
            where: {
              email: req.body.email
            }
          }) 
          
          if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) { // compara a senha recebida no body com a senha gravada no banco de dados
            const token = jwt.sign({ id: user.id, email: user.email }, 'segredo') // gera o token do usuário com JWT
            res.cookie('token', token, { maxAge: 2592000000 }) // expira em 30 dias
            
            res.redirect('/')
          } else res.render('login', { errors: [{ msg: "Usuário ou Senha incorretos!" }] })
        } catch (error) {
          res.status(400).json({ error })
        }
      }
}

module.exports = UserController