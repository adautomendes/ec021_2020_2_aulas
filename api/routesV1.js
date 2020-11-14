const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ApiControllerV1 = require('./controllers/ApiControllerV1');

const routerInstance = new Router();

routerInstance.post('/toddy', ApiControllerV1.create);
routerInstance.patch('/toddy/:id', ApiControllerV1.update);
routerInstance.get('/toddy', ApiControllerV1.search);
routerInstance.del('/toddy/:id', ApiControllerV1.remove);

module.exports = routerInstance;