const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = database.define('material', {
    id: {
        type: DataTypes.INTEGER,
        alowNull: false,
        primaryKey: true,
    },
    descricao: {
        type: DataTypes.STRING,
        alowNull: false,
    },
    umd: {
        type: DataTypes.STRING,
        alowNull: false,
    },
});

module.exports = Material;