const database = require('../../db');
const { DataTypes } = require('sequelize');

const Fornecedor = require('./fornecedor');
const Arquivo = require('./arquivo');

const Nota = database.define('nota', {

    n_nota: {

        type: DataTypes.INTEGER,
        alowNull: false,
        primaryKey: true,

    }, // define o número da nota

    data: {

        type: DataTypes.DATEONLY,
        alowNull: false,

    }, // define a data da nota

    valor: {

        type: DataTypes.FLOAT,
        alowNull: false,

    }, // define o valor da nota

    fornecedor_id: {

        type: DataTypes.INTEGER,
        alowNull: false,
        references: {
            model: Fornecedor,
            key: 'id',
        },
        
    }, // define o fornecedor da nota

    arquivo_id: {

        type: DataTypes.INTEGER,
        alowNull: true,
        references: {
            model: Arquivo,
            key: 'id',
        },

    }, // define o arquivo da nota

}); // define o model de nota

Nota.belongsTo(Fornecedor, { foreignKey: 'fornecedor_id' });
Nota.belongsTo(Arquivo, { foreignKey: 'arquivo_id' });

module.exports = Nota; // exporta o model de nota