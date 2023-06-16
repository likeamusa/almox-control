const Centro = require('../model/centro');

module.exports = {

    async create (req, res) {

        try {
            const centro = req.body; // recebe o corpo da requisição

            const newCentro = await Centro.create(centro); // cria um novo centro

            return res.status(201).json(newCentro); // retorna o novo centro
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // cria um novo centro

    async read (req, res) {

        try {
            const centros = await Centro.findAll(); // lê todos os centros

            return res.status(200).json(centros); // retorna todos os centros
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // lê todos os centros

    async update (req, res) {

        try {
            const { id_centro } = req.params; // recebe a id do centro
            const centro = req.body; // recebe o corpo da requisição

            const updatedCentro = await Centro.update(centro, { where: { id_centro } }); // atualiza o centro

            return res.status(200).json(updatedCentro); // retorna o centro atualizado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // atualiza um centro

    async delete (req, res) {

        try {
            const { id_centro } = req.params; // recebe a id do centro

            const deletedCentro = await Centro.destroy({ where: { id_centro } }); // deleta o centro

            return res.status(200).json(deletedCentro); // retorna o centro deletado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // deleta um centro

    async readOne (req, res) {

        try {
            const { id_centro } = req.params; // recebe a id do centro

            const centro = await Centro.findByPk(id_centro); // lê o centro

            return res.status(200).json(centro); // retorna o centro
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
        
    }, // lê um centro
};