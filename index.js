const restify = require('restify');
const server = restify.createServer();

server.use(restify.plugins.bodyParser());
// http:// => protocolo
// localhost => endereço do servidor
// :5000 => porta do servidor
// /ec021/helloworld => rota (recurso)
// GET http://localhost:5000/ec021/helloworld
server.get('/ec021/helloworld', function (req, res) {
    let resposta = {
        msg: "Hello world!!"
    };
    return res.json(200, resposta);
});

server.post('/ec021/helloworld', function (req, res) {
    let { msg } = req.body;
    let resposta = {
        msg
    };
    return res.json(200, resposta);
});

server.listen(5000, function () {
    console.log("Servidor rodando...");
});