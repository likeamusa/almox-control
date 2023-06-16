const Colaborador = require('../model/colaborador');

module.exports = {

    async create (req, res) {
        try {
            const colaborador = req.body; // recebe o corpo da requisição

            const newColaborador = await Colaborador.create(colaborador); // cria um novo colaborador

            return res.status(201).json(newColaborador); // retorna o novo colaborador
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
    }, // cria um novo colaborador

    async read (req, res) {
        try {
            const colaboradores = await Colaborador.findAll(); // lê todos os colaboradores

            return res.status(200).json(colaboradores); // retorna todos os colaboradores
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
    }, // lê todos os colaboradores

    async update (req, res) {
        try {
            const { matricula } = req.params; // recebe a matricula do colaborador
            const colaborador = req.body; // recebe o corpo da requisição

            const updatedColaborador = await Colaborador.update(colaborador, { where: { matricula } }); // atualiza o colaborador

            return res.status(200).json(updatedColaborador); // retorna o colaborador atualizado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
    }, // atualiza um colaborador

    async delete (req, res) {
        try {
            const { matricula } = req.params; // recebe a matricula do colaborador

            const deletedColaborador = await Colaborador.destroy({ where: { matricula } }); // deleta o colaborador

            return res.status(200).json(deletedColaborador); // retorna o colaborador deletado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
    }, // deleta um colaborador

    async readOne (req, res) {
        try {
            const { matricula } = req.params; // recebe a matricula do colaborador

            const colaborador = await Colaborador.findByPk(matricula); // lê o colaborador

            return res.status(200).json(colaborador); // retorna o colaborador
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }
    }, // lê um colaborador
};