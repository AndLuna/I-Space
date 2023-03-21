//const {createMenuObject} = require('../helper/createMenuObject');
const PagesController = {
    sobre: (req, res) => {
        res.render('sobre', {});
    },

    iphone: (req, res) => {
        res.render('productsPage/iphone', {});
    },

    mac: (req, res) => {
        res.render('productsPage/mac', {});
    },

    ipad: (req, res) => {
        res.render('productsPage/ipad', {});
    },

    watch: (req, res) => {
        res.render('productsPage/watch', {});
    },
};




module.exports = PagesController;
