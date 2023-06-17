const database = require('../../db');
const { DataTypes } = require('sequelize');

const Fornecedor = database.define('fornecedor', {

    id: {

        type: DataTypes.INTEGER,
        alowNull: false,
        primaryKey: true,
        autoIncrement: true,

    }, // define o id do fornecedor

    cnpj: {

        type: DataTypes.STRING,
        alowNull: false,

    }, // define o cnpj do fornecedor

    nome: {

        type: DataTypes.STRING,
        alowNull: false,

    }, // define o nome do fornecedor

});

module.exports = Fornecedor;