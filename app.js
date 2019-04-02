//Instanciando o módulo que contém as configurações 
//do servidor
var app = require('./config/server');

/**
 * As rotas também foram separadas em módulos
 */
var rotaHome = require('./app/routes/home');
var rotaNoticias = require('./app/routes/noticias');
var rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');

rotaHome(app);
rotaNoticias(app);
rotaInclusaoNoticias(app);

//Subindo um servidor
app.listen(3000, function() {
    console.log('Server ON');
});

