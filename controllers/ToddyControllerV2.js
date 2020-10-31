const Toddy = require('../models/Toddy');

module.exports = {
    create: async (req, res) => {
        console.log("Executando rota POST");
        let { lote, conteudo, validade } = req.body;

        let resposta = await Toddy.create(
            {
                lote,
                conteudo,
                validade
            }
        );

        return res.json(201, resposta);
    },
    update: (req, res) => {
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
    },
    search: (req, res) => {
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
    },
    remove: (req, res) => {
        console.log("Executando rota DELETE");
        let { id } = req.params;

        let resposta = {
            id,
            nExcluidos: 1
        }

        return res.json(200, resposta);
    }
}