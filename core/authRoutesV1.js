const Router = require('restify-router').Router;
// const { Router } = require('restify-router'); // Desestruturação da biblioteca (importando diretamente a classe Router)
const AuthControllerV1 = require('./controllers/AuthControllerV1');

const routerInstance = new Router();

routerInstance.post('/login', AuthControllerV1.login); // http://localhost:5000/auth/v1/login

module.exports = routerInstance;