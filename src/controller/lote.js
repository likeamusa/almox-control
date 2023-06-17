const Lote = require('../model/lote');

module.exports = {

    async create(req, res) {

        try {

            const loteData = req.body; // recebe o corpo da requisição

            const lote = await Lote.create({ // cria o lote
                ...loteData,
            });

            return res.status(200).json(lote); // retorna o lote

        } // cria um novo lote

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // cria um novo lote

    async read(req, res) {

        try {

            const lotes = await Lote.findAll(); // lê todos os lotes

            return res.status(200).json(lotes); // retorna todos os lotes

        } // lê todos os lotes

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // lê todos os lotes

    async update(req, res) {

        try {

            const { lote } = req.params; // recebe o lote

            const loteData = req.body; // recebe o corpo da requisição

            const loteExists = await Lote.findOne({ where: { lote } }); // verifica se o lote existe

            if (!loteExists) { // se o lote não existe
                return res.status(400).json({ error: 'Lote não existe' }); // retorna erro
            }

            const lote_ = await Lote.update({ // atualiza o lote
                ...loteData,
            }, {
                where: {
                    lote,
                }
            });

            return res.status(200).json(lote_); // retorna o lote

        } // atualiza um lote

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // atualiza um lote

    async delete(req, res) {

        try {

            const { lote } = req.params; // recebe o lote

            const loteExists = await Lote.findOne({ where: { lote } }); // verifica se o lote existe

            if (!loteExists) { // se o lote não existe
                return res.status(400).json({ error: 'Lote não existe' }); // retorna erro
            }

            await Lote.destroy({ where: { lote } }); // deleta o lote

            return res.status(200).json({ message: 'Lote deletado com sucesso' }); // retorna mensagem de sucesso

        } // deleta um lote

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // deleta um lote

    async readOne(req, res) {

        try {

            const { lote } = req.params; // recebe o lote

            const lote_ = await Lote.findOne({ where: { lote }, include: { association: 'material' } }); // lê o lote

            return res.status(200).json(lote_); // retorna o lote

        } // lê um lote

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // lê um lote

};