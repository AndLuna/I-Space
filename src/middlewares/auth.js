const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    if(req.cookies.token){
        try {
            jwt.verify(req.cookies.token, 'segredo')
            next()
        } catch (error) {
            res.render('login')
        }
    } else {
        res.render('login')
    }
}

module.exports = auth