const express = require('express');
const app = express();


// rotas utilizando get para renderizar algo, e sendFile para enviar um arquivo HTML
// usamos a variavel __dirname para evitar erros, ela aponta que o arquivo a seguir 
// esta dentro do repositorio.

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + "/views/sobre.html");
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});


/// fim rotas



app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});



module.exports = app;
