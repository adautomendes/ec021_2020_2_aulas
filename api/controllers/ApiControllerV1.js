require('dotenv').config();
const axios = require('axios');
const coreAxios = axios.create(
    {
        baseURL: `${process.env.CORE_URL}/ec021/v2`
    }
);

module.exports = {
    create: (req, res) => {
        console.log(`[API] - Executando POST`);
        let url = `/toddy`;
        let data = req.body;
        let config = {
            headers: req.headers
        }

        coreAxios.post(url, data, config)
            .then(function (response) {
                return res.json(response.status, response.data);
            })
            .catch(function (error) {
                return res.json(error.response.status, error.response.data);
            });
    },
    update: (req, res) => {
        console.log(`[API] - Executando PATCH`);
        let url = `/toddy/${req.params.id}`;
        let data = req.body;
        let config = {
            headers: req.headers
        }

        coreAxios.patch(url, data, config)
            .then(function (response) {
                return res.json(response.status, response.data);
            })
            .catch(function (error) {
                return res.json(error.response.status, error.response.data);
            });
    },
    search: (req, res) => {
        console.log(`[API] - Executando GET`);
        let url = `/toddy`;
        let id = req.query.id;
        let config = {
            headers: req.headers
        }

        if(id) {
            url += `?id=${id}`;
        }

        coreAxios.get(url, config)
            .then(function (response) {
                return res.json(response.status, response.data);
            })
            .catch(function (error) {
                return res.json(error.response.status, error.response.data);
            });
    },
    remove: (req, res) => {
        console.log(`[API] - Executando DELETE`);
        let url = `/toddy/${req.params.id}`;
        let config = {
            headers: req.headers
        }

        coreAxios.delete(url, config)
            .then(function (response) {
                return res.json(response.status, response.data);
            })
            .catch(function (error) {
                return res.json(error.response.status, error.response.data);
            });
    }
}