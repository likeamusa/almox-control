const Movimentacao = require('../model/movimentacao');

module.exports = {

    async create(req, res) {

        try {

            const movData = req.body;

            const data = new Date();

            const mov = await Movimentacao.create({ ...movData, data });

            return res.status(201).json(mov);

        } catch (error) {

            console.log(error);
            return res.status(500).json(error.message);

        }

    }, // cria uma movimentação

    async read(req, res) {

        try {

            const mov = await Movimentacao.findAll({
                include: [
                    {
                        association: 'tipo_mov',
                        attributes: ['mov'],
                    },
                    {
                        association: 'origem',
                        attributes: ['descricao'],
                    },
                    {
                        association: 'destino',
                        attributes: ['descricao'],
                    },
                    {
                        association: 'solicitante',
                        attributes: ['nome'],
                    },
                    {
                        association: 'autorizador',
                        attributes: ['nome'],
                    },
                    {
                        association: 'material',
                        attributes: ['descricao'],
                    },
                    {
                        association: 'c_a_',
                        attributes: ['vencimento'],
                    },
                    {
                        association: 'lote',
                        attributes: ['validade'],
                    },
                    {
                        association: 'laudo',
                        attributes: ['vencimento'],
                    }
                ]
            });

            return res.status(200).json(mov);

        } catch (error) {

            console.log(error);
            return res.status(500).json(error);

        }
    }, // lê todas as movimentações
};  // exporta o módulo