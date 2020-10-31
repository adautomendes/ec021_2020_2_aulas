const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ToddyControllerV2 = require('./controllers/ToddyControllerV2');

const routerInstance = new Router();

routerInstance.post('/toddy', ToddyControllerV2.create);
routerInstance.patch('/toddy/:id', ToddyControllerV2.update);
routerInstance.get('/toddy', ToddyControllerV2.search);
routerInstance.del('/toddy/:id', ToddyControllerV2.remove);

module.exports = routerInstance;