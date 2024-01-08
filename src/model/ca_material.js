const database = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');
const C_A_ = require('./c_a_');

const C_A_Material = database.define('ca_material', {
    caId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }, // numero do certificado de autenticacao

    materialId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Material,
            key: 'id'
        }
    }, // material

    c_a: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: C_A_,
            key: 'c_a_',
        }
    }, // numero do certificado de autenticacao

}, {
    timestamps: true,
});

C_A_Material.belongsTo(Material, { foreignKey: 'materialId' }); // define o relacionamento entre o certificado de autenticacao e o material

C_A_Material.belongsTo(C_A_, { foreignKey: 'c_a' }); // define o relacionamento entre o certificado de autenticacao e o material

module.exports = C_A_Material;