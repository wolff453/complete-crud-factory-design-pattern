const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '0714GFA',
      database : 'cadastro'
    }
  });

  //COLOCAR VARIAVEIS DE AMBIENTE

  module.exports = knex