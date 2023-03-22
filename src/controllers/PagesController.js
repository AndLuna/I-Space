const DB = require('../database/DB.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//const {createMenuObject} = require('../helper/createMenuObject');
const PagesController = {
    sobre: (req, res) => {
        res.render('sobre', {});
    },

    iphone: (req, res) => {
        res.render('productsPage/iphone', {
            DB,
            toThousand
        });
    },

    mac: (req, res) => {
        res.render('productsPage/mac', {
            DB,
            toThousand
        });
    },

    ipad: (req, res) => {
        res.render('productsPage/ipad', {
            DB,
            toThousand
        });
    },

    watch: (req, res) => {
        res.render('productsPage/watch', {
            DB,
            toThousand
        });
    },
};




module.exports = PagesController;
