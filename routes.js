const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const ToddyController = require('./controllers/ToddyController');

const routerInstance = new Router();

routerInstance.post('/toddy', ToddyController.create);
routerInstance.patch('/toddy/:id', ToddyController.update);
routerInstance.get('/toddy', ToddyController.search);
routerInstance.del('/toddy/:id', ToddyController.remove);

module.exports = routerInstance;