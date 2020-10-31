const DB_URL = 'mongodb://localhost:27017/';

const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    dbName: 'ec021_2020_2_aulas'
};

module.exports = {
    DB_URL,
    DB_CONFIG
}