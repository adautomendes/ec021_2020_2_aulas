const { Schema, model } = require('mongoose');

const ToddySchema = new Schema(
    {
        lote: String,
        conteudo: Number,
        validade: String
    },
    {
        timestamps: true // Cria os campos createdAt e updatedAt
    }
);

module.exports = model('Toddy', ToddySchema);