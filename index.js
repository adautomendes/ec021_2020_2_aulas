const restify = require('restify');
const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
// http:// => protocolo
// localhost => endereço do servidor
// :5000 => porta do servidor
// /ec021/toddy => rota (recurso)

// POST => Inserts => http://localhost:5000/ec021/toddy
server.post('/ec021/toddy', function (req, res) {
    console.log("Executando rota POST");
    let { lote, conteudo, validade } = req.body;

    let resposta = {
        id: "2", // Simulando a resposta do BD
        lote,
        conteudo,
        validade
    };

    return res.json(200, resposta);
});

// PATCH => Updates => http://localhost:5000/ec021/toddy/:id (id = path parameter)
// PATCH => Updates => http://localhost:5000/ec021/toddy/123 (123 = id = path parameter)
server.patch('/ec021/toddy/:id', function (req, res) {
    console.log("Executando rota PATCH");
    let { id } = req.params;
    let { lote, conteudo, validade } = req.body;

    let resposta = {
        id,
        lote,
        conteudo,
        validade
    };

    return res.json(200, resposta);
});

// GET => Reads => http://localhost:5000/ec021/toddy?id=xyz (id = query parameter)
// GET => Reads => http://localhost:5000/ec021/toddy (buscar todos)
// GET => Reads => http://localhost:5000/ec021/toddy?id=xyz (busca por id)
server.get('/ec021/toddy', function (req, res) {
    console.log("Executando rota GET");
    let { id } = req.query;

    let resposta;
    if (id) {
        // Buscar por id
        resposta = {
            id: "1",
            lote: "X1A",
            conteudo: "200",
            validade: "17/11/2020"
        }
    } else {
        // Buscar todos
        resposta = [
            {
                id: "1",
                lote: "X1A",
                conteudo: "200",
                validade: "17/11/2020"
            },
            {
                id: "2",
                lote: "X1A",
                conteudo: "200",
                validade: "17/11/2020"
            },
            {
                id: "3",
                lote: "X1A",
                conteudo: "200",
                validade: "17/11/2020"
            }
        ];
    }

    return res.json(200, resposta);
});

// DELETE => Deletes => http://localhost:5000/ec021/toddy/:id (id = path parameter)
server.del('/ec021/toddy/:id', function (req, res) {
    console.log("Executando rota DELETE");
    let { id } = req.params;

    let resposta = {
        id,
        nExcluidos: 1
    }

    return res.json(200, resposta);
});

server.listen(5000, function () {
    console.log("Servidor rodando...");
});