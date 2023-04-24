const fs = require("fs");


const log = (req,res,next) => {
    const file = 'src\\logs\\logs.txt'

    if(!fs.existsSync(file))
        fs.writeFileSync(file,'')

    fs.appendFileSync(file, 'O usuário acessou a rota: ' + req.url + '\n')
    next()
}
module.exports = log