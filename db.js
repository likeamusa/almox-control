const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    logging: false,
    ssl: true,
    dialectOptions: {
        ssl: {}
    }
});

database.sync({
    logging: false,
}).then(() => {
    console.log('Database connected.');
}).catch((error) => {
    console.log('Error connecting to database: ', error);
});

module.exports = database;