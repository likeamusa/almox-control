const C_A_ = require('../model/c_a_');

const Material = require('../model/material');

module.exports = {

    async create (req, res) {
        
        try {

            const c_a_Data = req.body; // recebe o corpo da requisição

            const c_a_ = await C_A_.create({ // cria o certificado de autenticação
                ...c_a_Data,
            });

            return res.status(200).json(c_a_); // retorna o certificado de autenticação

        } // cria um novo certificado de autenticação

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // cria um novo certificado de autenticação

    async read (req, res) {

        try {

            const c_a_s = await C_A_.findAll(); // lê todos os certificados de autenticação

            return res.status(200).json(c_a_s); // retorna todos os certificados de autenticação

        } // lê todos os certificados de autenticação

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // lê todos os certificados de autenticação

    async update (req, res) {

        try {

            const { c_a_ } = req.params; // recebe o certificado de autenticação
                
            const c_a_Data = req.body; // recebe o corpo da requisição

            const c_a_Exists = await C_A_.findOne({ where: { c_a_ } }); // verifica se o certificado de autenticação existe

            if (!c_a_Exists) { // se o certificado de autenticação não existe
                return res.status(400).json({ error: 'Certificado de autenticação não existe' }); // retorna erro
            }

            const c_a_Updated = await C_A_.update({ // atualiza o certificado de autenticação
                ...c_a_Data,
            }, { where: { c_a_ } });

            return res.status(200).json(c_a_Updated); // retorna o certificado de autenticação atualizado
    
            } // atualiza um certificado de autenticação

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // atualiza um certificado de autenticação

    async delete (req, res) {

        try {

            const { c_a_ } = req.params; // recebe o certificado de autenticação

            const c_a_Exists = await C_A_.findOne({ where: { c_a_ } }); // verifica se o certificado de autenticação existe

            if (!c_a_Exists) { // se o certificado de autenticação não existe
                return res.status(400).json({ error: 'Certificado de autenticação não existe' }); // retorna erro
            }

            const c_a_Deleted = await C_A_.destroy({ where: { c_a_ } }); // deleta o certificado de autenticação

            return res.status(200).json(c_a_Deleted); // retorna o certificado de autenticação deletado

        } // deleta um certificado de autenticação

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // deleta um certificado de autenticação

    async readOne (req, res) {

        try {

            const { material_id } = req.params; // recebe o certificado de autenticação

            const c_a_Exists = await C_A_.findOne({ where: { material_id } }); // verifica se o certificado de autenticação existe

            if (!c_a_Exists) { // se o certificado de autenticação não existe
                return res.status(400).json({ error: 'Certificado de autenticação não existe' }); // retorna erro
            }

            const all_c_a_s = await C_A_.findAll({ where: { material_id } }); // lê todos os certificados de autenticação

            return res.status(200).json(all_c_a_s); // retorna o certificado de autenticação

        } // lê um certificado de autenticação

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // lê um certificado de autenticação
};