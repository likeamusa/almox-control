const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = new Sequelize({
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
});

database.sync()

module.exports = database;