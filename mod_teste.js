//Para que possamos usar o módulo, temos que chamar
//o comando abaixo (module.exports). Podemos atribuir a isso
//uma variável ou uma função
module.exports = function() {
    var msg = 'Este módulo contém apenas uma string';
    return msg;
};