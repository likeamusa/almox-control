const database = require('../../db');
const { DataTypes } = require('sequelize');

const Colaborador = database.define('colaborador', {
    matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    }, // matricula do colaborador

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }, // nome do colaborador

    func: {
        type: DataTypes.STRING,
        allowNull: false,
    }, // função do colaborador

    data_admissao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }, // data de admissão do colaborador

    data_demissao: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    }, // data de demissão do colaborador
    
});

module.exports = Colaborador;