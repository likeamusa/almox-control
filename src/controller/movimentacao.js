const Movimentacao = require('../model/movimentacao');

module.exports = {

    async create(req, res) {

        try {

            const movData = req.body;

            const lastId = await Movimentacao.max('id');

            let count = 0;
            const updatedId = movData.map((mov) => {
                count++;

                return {
                    ...mov,
                    id: lastId + count,
                };

            });

            const movs = await Movimentacao.bulkCreate(updatedId);

            console.log(movs);
            return res.status(201).json({ error: false, data: movs });

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: true, message: error });

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

            const movs = mov.map((mov) => {
                return {
                    id_mov: mov.id_mov,
                    tipo_mov: mov.tipo,
                    id_centro_origem: mov.id_centro_origem,
                    id_centro_destino: mov.id_centro_destino,
                    id_resp_sol: mov.id_resp_sol,
                    id_resp_aut: mov.id_resp_aut,
                    id_material: mov.id_material,
                    n_lote: mov.n_lote,
                    n_laudo: mov.n_laudo,
                    n_nota: mov.n_nota,
                    n_ca: mov.n_ca,
                    qtde: mov.qtde,
                    data: mov.data,
                    status: mov.status,
                    mov: mov.tipo_mov?.mov,
                    origem: mov.origem?.descricao,
                    destino: mov.destino?.descricao,
                    solicitante: mov.solicitante?.nome,
                    autorizador: mov.autorizador?.nome,
                    material: mov.material?.descricao,
                    vencimento_ca: mov.c_a_?.vencimento,
                    validade_lote: mov.lote?.validade,
                    vencimento_laudo: mov.laudo?.vencimento,
                    id_usuario: mov.id_usuario,

                };
            });

            return res.status(200).json({ error: false, data: movs });

        } catch (error) {

            console.log(error);
            return res.status(500).json(error);

        }
    }, // lê todas as movimentações

    async autorize(req, res) {

        try {

            const { id_mov } = req.params;
            const { id_resp_aut } = req.body;

            const mov = await Movimentacao.findAll({
                where: { id_mov },
            });

            if (!mov) {

                return res.status(404).json({ error: true, message: 'Movimentação não encontrada' });

            } // verifica se a movimentação existe

            if (mov.status === 'Autorizado') {

                return res.status(400).json({ error: true, message: 'Movimentação já autorizada' });

            } // verifica se a movimentação já foi autorizada

            const autorizado = await Movimentacao.update({ status: 'Autorizada', id_resp_aut }, {
                where: { id_mov },
            });

            console.log(autorizado);

            return res.status(200).json({ error: false, message: 'Movimentação autorizada', data: autorizado });

        } // tenta executar

        catch (error) {

            console.log(error);
            return res.status(500).json(error);

        } // retorna erro

    }, // autoriza uma movimentação

    async readOne(req, res) {

        try {

            const { id_mov } = req.params;

            const mov = await Movimentacao.findAll({
                where: { id_mov },
                include: { all: true },
                attributes: {
                    exclude: ['usuario'],
                }
            });

            if (!mov) {
                res.status(404).json({ error: true, message: 'Movimentação não encontrada' });
            } // verifica se a movimentação existe

            return res.status(200).json({ error: false, data: mov });

        } // tenta executar

        catch (error) {

            console.log(error);
            return res.status(500).json(error);

        } // retorna erro

    }, // lê uma movimentação

    async delete(req, res) {

        try {

            const { id_mov } = req.params;

            const mov = await Movimentacao.findAll({
                where: { id_mov },
            });

            if (!mov) {

                return res.status(404).json({ error: true, message: 'Movimentação não encontrada' });

            } // verifica se a movimentação existe

            const deleted = await Movimentacao.destroy({
                where: { id_mov },
            });

            return res.status(200).json({ error: false, message: 'Movimentação deletada', data: deleted });

        } // tenta executar

        catch (error) {

            console.log(error);
            return res.status(500).json(error);

        } // retorna erro
    },

};  // exporta o módulo