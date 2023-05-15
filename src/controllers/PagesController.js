
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const {Product} = require('../models')

const PagesController = {
    productPage: async(req, res) => {
        try {
            const products = await Product.findAll()
            
            res.render('productPage', {
                products,
                toThousand
            });
        } catch (error) {
            res.status(400).json({error})
        }

      },
    sobre: (req, res) => {
        res.render('sobre', {});
    }, 
    cadastro: (req, res) => {
        res.render('cadastro', {});
    },
    login: (req,res) => {
        res.render('login', {})
    }

};





module.exports = PagesController;
