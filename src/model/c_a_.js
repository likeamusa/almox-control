const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');

const C_A_ = database.define('c_a_', {
    
    c_a_: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    }, // numero do certificado de autenticacao

    material_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Material,
            key: 'id'
        }
    }, // material

    vencimento: {
        type: DataTypes.DATE,
        allowNull: false,
    }, // data de vencimento do certificado

});

C_A_.belongsTo(Material, { foreignKey: 'material_id' }); // define o relacionamento entre o certificado de autenticacao e o material

module.exports = C_A_;