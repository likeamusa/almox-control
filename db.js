const { Sequelize } = require('sequelize');
const { development, production } = require('./src/infra/database');

const database = new Sequelize(process.env.NODE_ENV === 'production' ? production : development);

database.sync({
    force: false,
}).then(() => {
    console.log('Database connected.');
}).catch((error) => {
    console.log('Error connecting to database: ', error);
});

module.exports = database;