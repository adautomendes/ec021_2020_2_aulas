const restify = require('restify');
const mongoose = require('mongoose');
const DB = require('./database');
const toddyRouterV1 = require('./routesV1');
const toddyRouterV2 = require('./routesV2');
const server = restify.createServer();

toddyRouterV1.applyRoutes(server, '/ec021/v1'); // Mock do BD
toddyRouterV2.applyRoutes(server, '/ec021/v2'); // Acessa o BD de fato

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.listen(5000, function () {
    console.log("Servidor rodando...");

    // Efetivar a conexão com o BD
    mongoose.connect(DB.DB_URL, DB.DB_CONFIG, function(error) {
        if(!error) {
            console.log(`MongoDB Conectado`);
        } else {
            console.log(`Erro ao conectar no MongoDB: ${error}`);
        }
    });
});