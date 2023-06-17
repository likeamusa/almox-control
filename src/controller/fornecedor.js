const Fornecedor = require('../model/fornecedor');

module.exports = {

    async create (req, res) {

        const fornecedorData = req.body;

        try {

            const fornecedor = await Fornecedor.create(fornecedorData);

            return res.status(201).json(fornecedor);

        } catch (error) {

            console.log(error);
            return res.status(500).json(error);

        } // trata erros

    }, // cria um fornecedor

    async read (req, res) {

        try {

            const fornecedores = await Fornecedor.findAll();

            return res.status(200).json(fornecedores);

        } // lista todos os fornecedores
        catch (error) {

            console.log(error);

            return res.status(500).json(error);

        } // trata erros

    }, // lista todos os fornecedores
    
    async update (req, res) {

        try {

            const { id } = req.params

            const fornecedor = await Fornecedor.update( id, {
                where: {
                    id,
                },
            });

            return res.status(200).json(fornecedor);

        } // atualiza um fornecedor

        catch (error) {

            console.log(error);

            return res.status(500).json(error);

        } // trata erros

    }, // atualiza um fornecedor
    
    async delete (req, res) {

        try {

            const { id } = req.params

            const fornecedor = await Fornecedor.destroy({
                where: {
                    id,
                },
            });

            return res.status(200).json(fornecedor);

        } // deleta um fornecedor

        catch (error) {

            console.log(error);

            return res.status(500).json(error);

        } // trata erros

    }, // deleta um fornecedor
    
    async readOne (req, res) {

        try {

            const { id } = req.params

            const fornecedor = await Fornecedor.findOne({
                where: {
                    id,
                },
            });

            return res.status(200).json(fornecedor);

        } // lê um fornecedor

        catch (error) {

            console.log(error);

            return res.status(500).json(error);

        } // trata erros

    }, // lê um fornecedor

};