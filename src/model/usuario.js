const database = require('../../db');
const { DataTypes } = require('sequelize');

const Colaborador = require('./colaborador');

const Usuario = database.define('usuario', {

    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Colaborador,
            key: 'matricula'
        }
    },

    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    tipo_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    centro: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});

Usuario.belongsTo(Colaborador, { foreignKey: 'matricula' }); // define o relacionamento entre o usuario e o colaborador

module.exports = Usuario;