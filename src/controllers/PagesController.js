const DB = require('../database/DB.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const PagesController = {
    productPage: (req, res) => {
        const { type } = req.params;
        const filteredProducts = DB.filter((product) => product.type === type);
        res.render('productPage', { products: filteredProducts, toThousand });
      },
    sobre: (req, res) => {
        res.render('sobre', {});
    }
};




module.exports = PagesController;
