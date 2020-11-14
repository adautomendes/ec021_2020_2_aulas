const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ToddyControllerV2 = require('./controllers/ToddyControllerV2');
const AuthControllerV1 = require('./controllers/AuthControllerV1');

const routerInstance = new Router();

routerInstance.post('/toddy', AuthControllerV1.validateToken, ToddyControllerV2.create);
routerInstance.patch('/toddy/:id', AuthControllerV1.validateToken, ToddyControllerV2.update);
routerInstance.get('/toddy', AuthControllerV1.validateToken, ToddyControllerV2.search);
routerInstance.del('/toddy/:id', AuthControllerV1.validateToken, ToddyControllerV2.remove);

module.exports = routerInstance;