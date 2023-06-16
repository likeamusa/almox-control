const database = require('../../db');
const { DataTypes } = require('sequelize');

const Centro = database.define('centro', {
    id_centro: {
        type: DataTypes.STRING,
        alowNull: false,
        primaryKey: true,
    },

    descricao: {
        type: DataTypes.STRING,
        alowNull: false,
    },
});

module.exports = Centro;