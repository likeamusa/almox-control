const db = require('../../db');
const { DataTypes } = require('sequelize');

const Material = require('./material');
const Centro = require('./centro');
const Colaborador = require('./colaborador');
const TipoMov = require('./tipo_mov');
const Lote = require('./lote');
const Laudo = require('./laudo');
const Nota = require('./nota');
const C_A_ = require('./c_a_');
const Usuario = require('./usuario');

const Movimentacao = db.define('movimentacao', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }, // define o id da movimentação

    id_mov: {

        type: DataTypes.BIGINT,
        alowNull: false,

    }, // define o id da movimentação

    tipo: {

        type: DataTypes.STRING,
        alowNull: false,
        references: {
            model: TipoMov,
            key: 'tipo',
        }

    }, // define o tipo da movimentação

    id_centro_origem: {

        type: DataTypes.STRING,
        alowNull: true,
        references: {
            model: Centro,
            key: 'id_centro',

        }

    }, // define o centro de origem da movimentação

    id_centro_destino: {

        type: DataTypes.STRING,
        alowNull: true,
        references: {
            model: Centro,
            key: 'id_centro',
        }

    }, // define o centro de destino da movimentação

    id_resp_sol: {

        type: DataTypes.INTEGER,
        alowNull: false,
        references: {
            model: Colaborador,
            key: 'matricula',
        }

    }, // define o responsável pela solicitação da movimentação

    id_resp_aut: {

        type: DataTypes.INTEGER,
        alowNull: true,
        references: {
            model: Colaborador,
            key: 'matricula',
        }

    }, // define o responsável pela autorização da movimentação

    id_material: {

        type: DataTypes.INTEGER,
        alowNull: false,
        references: {
            model: Material,
            key: 'id',
        }

    }, // define o material da movimentação

    n_lote: {

        type: DataTypes.STRING,
        alowNull: true,
        references: {
            model: Lote,
            key: 'lote',
        }

    }, // define o lote da movimentação

    n_laudo: {

        type: DataTypes.STRING,
        alowNull: true,
        references: {
            model: Laudo,
            key: 'laudo',
        }

    }, // define o laudo da movimentação

    n_nota: {

        type: DataTypes.STRING,
        alowNull: true,

    }, // define a nota da movimentação

    n_ca: {

        type: DataTypes.INTEGER,
        alowNull: true,
    }, // define o numero do certificado de autenticacao da movimentação

    id_usuario: {

        type: DataTypes.INTEGER,
        alowNull: false,
        references: {
            model: Usuario,
            key: 'matricula',
        }

    }, // define o usuário da movimentação

    qtde: {

        type: DataTypes.INTEGER,
        alowNull: false,

    }, // define a quantidade da movimentação

    data: {

        type: DataTypes.DATE,
        alowNull: false,

    }, // define a data da movimentação

    status: {

        type: DataTypes.STRING,
        alowNull: false,
        defaultValue: 'Solicitado',

    }, // define o status da movimentação

}, {
    initialAutoIncrement: 1400,
});

Movimentacao.belongsTo(TipoMov, { foreignKey: 'tipo' });
Movimentacao.belongsTo(Centro, { foreignKey: 'id_centro_origem', as: 'origem' });
Movimentacao.belongsTo(Centro, { foreignKey: 'id_centro_destino', as: 'destino' });
Movimentacao.belongsTo(Colaborador, { foreignKey: 'id_resp_sol', as: 'solicitante' });
Movimentacao.belongsTo(Colaborador, { foreignKey: 'id_resp_aut', as: 'autorizador' });
Movimentacao.belongsTo(Material, { foreignKey: 'id_material', as: 'material' });
Movimentacao.belongsTo(Lote, { foreignKey: 'n_lote', as: 'lote' });
Movimentacao.belongsTo(Laudo, { foreignKey: 'n_laudo', as: 'laudo' });

module.exports = Movimentacao;
