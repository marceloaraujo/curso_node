module.exports = function(app) {
    app.get('/', function (req, res) {
        //Como o ejs está sendo usado e foi adicionado ao express,
        //agora é necessário usar a função render, para renderizar
        //a página que está na pasta views/home
        res.render('home/index');
    });  
};