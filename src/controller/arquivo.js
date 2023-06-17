const Arquivo = require('../model/arquivo');

module.exports = {

    async create(req, res) {}, // Criar um arquivo

    async update(req, res) {}, // Atualizar um arquivo

    async delete(req, res) {}, // Deletar um arquivo

    async read(req, res) {

        try {

            const arquivos = await Arquivo.findAll();

            return res.status(200).json(arquivos);

        } // retorna os arquivos

        catch (error) {
                
                console.log(error);
                return res.status(500).json({ error: error.message });
    
            } // retorna o erro

    }, // Listar todos os arquivos

    async readOne(req, res) {}, // Listar um arquivo

};