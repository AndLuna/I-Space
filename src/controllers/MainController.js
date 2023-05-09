/* const products = require('../database/products.json'); */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const {Op} = require('sequelize')

const {Product} = require('../models')


const MainController = {
    index: async(req, res) => {
        try {
            const products = await Product.findAll()
            
            res.render('index', {
                products,
                toThousand
            });
        } catch (error) {
            res.status(400).json({error})
        }

    }
}

module.exports = MainController