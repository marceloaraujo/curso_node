var http = require('http');

/**
 * Criando um servidor
 * @param req - Objeto contendo informações da requisição
 * @param res - Objeto que será usado para enviar a resposta do servidor
 */
var server = http.createServer(function(req, res) {

    //Recuperando a url para saber o que retornar para o usuário
    var categoria = req.url;
    if(categoria == '/tecnologia') {
        res.end("<html><body>Notícias de tecnologia</body></html>");
    } else if(categoria == '/moda') {
        res.end("<html><body>Notícias de moda</body></html>");
    } else if(categoria == '/beleza') {
        res.end("<html><body>Notícias de beleza</body></html>");
    } else {
        res.end("<html><body>Portal de notícias</body></html>");
    }

});
server.listen(3000);