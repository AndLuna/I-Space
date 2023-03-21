const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

const routes = require('./src/routes');


//views
//instanciando como view engine
app.set('view engine', 'ejs');
//instanciando pasta views
app.set('views', path.resolve('src','views'));
//liberando acesso a pasta public
app.use(express.static(path.resolve('public')));


app.use(routes);


app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});



module.exports = app;
