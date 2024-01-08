const Material = require('../model/material');
const Colaborador = require('../model/colaborador');
const Fornecedor = require('../model/fornecedor');
const Centro = require('../model/centro');
const Nota = require('../model/nota');
const Lote = require('../model/lote');
const Laudo = require('../model/laudo');
const Ca = require('../model/c_a_');
const Tipo_mov = require('../model/tipo_mov');
const Ca_material = require('../model/ca_material');

module.exports = {

    async read(req, res) {

        try {

            const material = await Material.findAll();
            const colaborador = await Colaborador.findAll();
            const fornecedor = await Fornecedor.findAll();
            const centro = await Centro.findAll();
            const nota = await Nota.findAll();
            const lote = await Lote.findAll();
            const laudo = await Laudo.findAll();
            const ca = await Ca.findAll();
            const tipo_mov = await Tipo_mov.findAll();
            const ca_material = await Ca_material.findAll();

            return res.status(200).json({ material, colaborador, fornecedor, centro, nota, lote, laudo, ca, tipo_mov, ca_material
             });

        } // tenta executar

        catch (error) {

            return res.status(500).json({ error: error.message });
        } // retorna erro

    }, // lista dos todas as tabelas
};