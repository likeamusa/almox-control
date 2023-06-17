const database = require('../../db');
const { DataTypes } = require('sequelize');

const TipoMov = database.define('tipo_mov', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    mov: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = TipoMov;