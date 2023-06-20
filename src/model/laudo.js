const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');

const Laudo = database.define('laudo', {

    laudo: {

        type: DataTypes.STRING, // define o tipo do laudo
        allowNull: false, // não permite nulo
        primaryKey: true, // define como chave primária

    }, // define o laudo do material

    material_id: {

        type: DataTypes.INTEGER, // define o tipo do material
        allowNull: false, // não permite nulo
        references: {
            model: Material,
            key: 'id',
        } // define a referência ao material

    }, // define o material do laudo

    vencimento: {

        type: DataTypes.DATEONLY, // define o tipo do vencimento
        allowNull: false, // não permite nulo

    }, // define o vencimento do laudo

}); // define o modelo do certificado de autenticação

Laudo.belongsTo(Material, { foreignKey: 'material_id' }); // define o relacionamento entre o laldo e o material

module.exports = Laudo; // exporta o certificado de autenticação