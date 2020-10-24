const restify = require('restify');
const toddyRouterV1 = require('./routes');
const server = restify.createServer();

toddyRouterV1.applyRoutes(server, '/ec021/v1');

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.listen(5000, function () {
    console.log("Servidor rodando...");
});