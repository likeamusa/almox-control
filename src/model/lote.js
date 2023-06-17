const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');

const Lote = database.define('Lote', {

    lote: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    }, // define o lote do material

    material_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Material,
            key: 'id',
        }
    }, // define o material do lote

    validade: {
        type: DataTypes.DATE,
        allowNull: false
    } // define o vencimento do lote

}); // define o modelo do certificado de autenticação

Lote.belongsTo(Material, { foreignKey: 'material_id', as: 'material' }); // define o relacionamento entre o lote e o material

module.exports = Lote; // exporta o certificado de autenticação