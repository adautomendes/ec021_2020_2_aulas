const Toddy = require('../models/Toddy');

module.exports = {
    create: async (req, res) => {
        console.log("Executando rota POST");

        let resposta = await Toddy.create(req.body);

        return res.json(201, resposta);
    },
    update: async (req, res) => {
        console.log("Executando rota PATCH");
        let { id } = req.params;

        let resposta = await Toddy.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(200, resposta);
    },
    search: async (req, res) => {
        console.log("Executando rota GET");
        let { id } = req.query;

        let resposta;
        if (id) {
            // Buscar por id
            resposta = await Toddy.findById(id);
        } else {
            // Buscar todos
            resposta = await Toddy.find();
        }

        return res.json(200, resposta);
    },
    remove: async (req, res) => {
        console.log("Executando rota DELETE");
        let { id } = req.params;

        let resposta = {
            id,
            excluido: await Toddy.findByIdAndDelete(id)
        }

        return res.json(200, resposta);
    }
}