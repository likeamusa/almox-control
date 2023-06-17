const database = require('../../db');
const { DataTypes } = require('sequelize');

const Arquivo = database.define('arquivo', {

    id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

    }, // Id gerado automaticamente

    nome_original: {

        type: DataTypes.STRING,
        allowNull: false,

    }, // Nome original do arquivo

    key: {

        type: DataTypes.STRING,
        allowNull: false,

    }, // Nome gerado para o arquivo

    url: {

        type: DataTypes.STRING,
        allowNull: false,
        
    }, // Url para acesso ao arquivo
});

module.exports = Arquivo;