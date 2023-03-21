const iphone = require('../database/iphone.json')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

//const {createMenuObject} = require('../helper/createMenuObject');
const PagesController = {
    sobre: (req, res) => {
        res.render('sobre', {});
    },

    iphone: (req, res) => {
        res.render('productsPage/iphone', {
            iphone,
            toThousand
        });
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
