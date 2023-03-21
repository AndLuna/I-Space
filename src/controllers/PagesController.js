//const {createMenuObject} = require('../helper/createMenuObject');
const PagesController = {
    sobre: (req, res) => {
        res.render('sobre', {});
    },
    iphone: (req, res) => {
        res.render('productsPage/iphone', {});
    }
};




module.exports = PagesController;
