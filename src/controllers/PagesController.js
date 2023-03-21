//const {createMenuObject} = require('../helper/createMenuObject');
const PagesController = {
    sobre: (req, res) => {
        res.render('sobre', {
            
        });
    }

}

const iphone = {
    iphone: (req, res) => {
        res.render('iphone', {
            
        });
    }

}





module.exports = PagesController;
