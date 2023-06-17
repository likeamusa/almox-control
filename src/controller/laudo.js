const Laudo = require('../model/laudo');

module.exports = {

    async create(req, res) {

        try {

            const laudoData = req.body; // recebe o corpo da requisição

            const laudo = await Laudo.create({ // cria o laudo
                ...laudoData,
            });

            return res.status(200).json(laudo); // retorna o laudo

        } // cria um novo laudo

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // cria um novo laudo

    async read(req, res) {

        try {

            const laudos = await Laudo.findAll(); // lê todos os laudos

            return res.status(200).json(laudos); // retorna os laudos

        } // lê todos os laudos

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // lê todos os laudos

    async update(req, res) {

        try {

            const { laudo } = req.body; // recebe o corpo da requisição

            const laudoData = req.body; // recebe o corpo da requisição

            const laudo_ = await Laudo.update({ // atualiza o laudo
                ...laudoData,
            }, {
                where: {
                    id: laudo,
                }
            });

            return res.status(200).json(laudo_); // retorna o laudo

        } // atualiza um laudo

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro

    }, // atualiza um laudo

    async delete(req, res) {

        try {

            const { laudo } = req.params; // recebe o corpo da requisição

            const laudo_ = await Laudo.destroy({ // deleta o laudo
                where: {
                    id: laudo,
                }
            });

            return res.status(200).json(laudo_); // retorna o laudo

        } // deleta um laudo

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // deleta um laudo

    async readOne(req, res) {

        try {

            const { laudo } = req.params; // recebe o corpo da requisição

            const laudo_ = await Laudo.findAll({ // lê um laudo
                where: {
                    laudo,
                },
                include: {
                    association: 'material',
                }
            });

            return res.status(200).json(laudo_); // retorna o laudo

        } // lê um laudo

        catch (err) {

            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro

        } // retorna o erro
    }, // lê um laudo
};