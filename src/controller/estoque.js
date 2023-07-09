const sequelize = require('../../db');

module.exports = {

    async getStock(req, res) {

        try {

            const saldo = await sequelize.query(`
                SELECT c.id_centro AS centro_id, c.descricao AS nome_centro, m.id_material, ma.descricao, ma.umd, ma.valor,SUM(CASE WHEN tm.mov = 'E' THEN m.qtde ELSE -m.qtde END) AS saldo
                FROM movimentacaos m
                JOIN tipo_movs tm ON m.tipo = tm.tipo
                JOIN centros c ON m.id_centro_origem = c.id_centro
                JOIN materials ma ON m.id_material = ma.id
                WHERE tm.mov IN ('E', 'S') AND m.status = 'Autorizada'
                GROUP BY c.id_centro, c.descricao, m.id_material, ma.descricao, ma.umd, ma.valor;
            `)

            return res.status(200).json({ error: false, data: saldo[0] });
        }

        catch (error) {

            console.log(error);
            return res.status(500).json({ error: true, message: error });

        }
    }
};