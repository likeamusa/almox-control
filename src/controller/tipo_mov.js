const TipoMov = require('../model/tipo_mov');

module.exports = {
    
    create (req, res) {

        try {
            const tipo_mov = req.body; // recebe o corpo da requisição

            const newTipoMov = TipoMov.create(tipo_mov); // cria um novo tipo de movimentação

            return res.status(201).json(newTipoMov); // retorna o novo tipo de movimentação
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

    }, // cria um novo tipo de movimentação

    read (req, res) {
            
            try {
                const tipo_mov = TipoMov.findAll(); // lê todos os tipos de movimentação
    
                return res.status(200).json(tipo_mov); // retorna todos os tipos de movimentação
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }

    }, // lê todos os tipos de movimentação

    update (req, res) {

        try {

            const { tipo } = req.params; // recebe o tipo de movimentação

            const tipo_mov = req.body; // recebe o corpo da requisição

            const updatedTipoMov = TipoMov.update(tipo_mov, { where: { tipo } }); // atualiza o tipo de movimentação

            return res.status(200).json(updatedTipoMov); // retorna o tipo de movimentação atualizado
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

    }, // atualiza um tipo de movimentação

    delete (req, res) {

        try {
            const { tipo } = req.params; // recebe o tipo de movimentação

            const deletedTipoMov = TipoMov.destroy({ where: { tipo } }); // deleta o tipo de movimentação

            return res.status(200).json(deletedTipoMov); // retorna o tipo de movimentação deletado
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        
    }, // deleta um tipo de movimentação

    readOne (req, res) {

        try {
            const { tipo } = req.params; // recebe o tipo de movimentação

            const tipo_mov = TipoMov.findOne({ where: { tipo } }); // lê um tipo de movimentação

            return res.status(200).json(tipo_mov); // retorna o tipo de movimentação
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

    }, // lê um tipo de movimentação
};