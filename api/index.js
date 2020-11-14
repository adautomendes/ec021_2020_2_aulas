const restify = require('restify');
require('dotenv').config();

const apiRouterV1 = require('./routesV1');
const server = restify.createServer();

apiRouterV1.applyRoutes(server, '/api/v1');

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.listen(process.env.PORTA, function () {
    console.log("API rodando...");
});