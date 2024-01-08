const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');

const C_A_ = database.define('c_a_', {
    
    c_a_: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    }, // numero do certificado de autenticacao

    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    }, // descricao do certificado de autenticacao

    // material_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Material,
    //         key: 'id'
    //     }
    // }, // material

    vencimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }, // data de vencimento do certificado

});

module.exports = C_A_;