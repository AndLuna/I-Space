const products = require('../database/products.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")


const MainController = {
    index: (req, res) => {
        res.render('index', {
            products,
            toThousand
        });
    }
}

module.exports = MainController