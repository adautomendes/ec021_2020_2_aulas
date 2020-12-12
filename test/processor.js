const createBody = function (requestParams, context, ee, next) {
    let body = {
        lote: `Lote_XXXX`,
        conteudo: `200`,
        validade: `12/12/2020`
    }

    context.vars.createJson = body;
    return next();
}

const updateBody = function (requestParams, context, ee, next) {
    let body = {
        lote: `Lote_YYYY`,
        conteudo: `300`,
        validade: `12/12/2021`
    }

    context.vars.updateJson = body;
    return next();
}

module.exports = {
    createBody,
    updateBody
}