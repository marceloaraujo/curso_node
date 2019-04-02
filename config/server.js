//Módulo criado para manter as configurações do servidor

//Fazendo uso da lib express
var express = require('express');
//Executando a função que o módulo do express retorna
var app = express();
//Informar ao express que a engine de views agora é o ejs
app.set('view engine', 'ejs');
//Informando ao express o caminho no qual ele deve carregar as views;
//Como esse arquivo vai ser chamado dentro do arquivo 'app.js', o caminho
//deve partir desse arquivo;
app.set('views', './app/views');

module.exports = app;