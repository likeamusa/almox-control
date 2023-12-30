require('dotenv').config();

module.exports = {

    production: {
        dialect: 'mssql',
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
    },
    development: {
        dialect: 'mysql',
        host: process.env.MYSQL_DB_HOST,
        port: process.env.MYSQL_DB_PORT,
        database: process.env.MYSQL_DB_NAME,
        username: process.env.MYSQL_DB_USER,
        password: process.env.MYSQL_DB_PASS,
        logging: false,
    },

}
