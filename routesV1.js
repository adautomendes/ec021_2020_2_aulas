const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ToddyControllerV1 = require('./controllers/ToddyControllerV1');
const AuthControllerV1 = require('./controllers/AuthControllerV1');

const routerInstance = new Router();

routerInstance.post('/toddy', AuthControllerV1.validateToken, ToddyControllerV1.create);
routerInstance.patch('/toddy/:id', AuthControllerV1.validateToken, ToddyControllerV1.update);
routerInstance.get('/toddy', AuthControllerV1.validateToken, ToddyControllerV1.search);
routerInstance.del('/toddy/:id', AuthControllerV1.validateToken, ToddyControllerV1.remove);

module.exports = routerInstance;