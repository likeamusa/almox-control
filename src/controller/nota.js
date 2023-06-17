const Nota = require('../model/nota');

module.exports = {

    async create(req, res) {

        try {

            const notaData = req.body;

            const nota = await Nota.create(notaData);

            return res.status(201).json(nota);

        } catch (error) {

            console.log(error);
            return res.status(500).json(error);

        }
    }, // cria uma nota
    
    async read(req, res) {

        try {

            const notas = await Nota.findAll();

            return res.status(200).json(notas);

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: error.message });

        }

    }, // lê todas as notas

    async update(req, res) {

        try {

            const notaData = req.body;
            const { n_nota } = req.params;

            const nota = await Nota.update(notaData, { where: { n_nota } });

            return res.status(200).json(nota);

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: error.message });

        }
    }, // atualiza uma nota

    async delete(req, res) {

        try {

            const { n_nota } = req.params;

            await Nota.destroy({ where: { n_nota } });

            return res.status(200).json({ message: 'Nota deletada com sucesso!' });

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: error.message });

        }
    }, // deleta uma nota

    async readOne(req, res) {

        try {

            const { n_nota } = req.params;

            const nota = await Nota.findOne({ where: { n_nota } });

            return res.status(200).json(nota);

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: error.message });

        }
        
    }, // lê uma nota

};