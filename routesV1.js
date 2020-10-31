const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ToddyControllerV1 = require('./controllers/ToddyControllerV1');

const routerInstance = new Router();

routerInstance.post('/toddy', ToddyControllerV1.create);
routerInstance.patch('/toddy/:id', ToddyControllerV1.update);
routerInstance.get('/toddy', ToddyControllerV1.search);
routerInstance.del('/toddy/:id', ToddyControllerV1.remove);

module.exports = routerInstance;