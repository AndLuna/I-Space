const DB = require('../database/products.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const PagesController = {
    productPage: (req, res) => {
        const { type } = req.params;
        const filteredProducts = DB.filter((product) => product.type === type);
        const pageTitle = `Apple ${type}`;
        res.render('productPage', { products: filteredProducts,  pageTitle: pageTitle, type: type, toThousand });
      },
    sobre: (req, res) => {
        res.render('sobre', {});
    }, 
    cadastro: (req, res) => {
        res.render('cadastro', {});
    }

};





module.exports = PagesController;
