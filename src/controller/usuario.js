const Usuario = require('../model/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    async create (req, res) {

        try {

            const usarioData = req.body; // recebe o corpo da requisição

            const { email, senha, matricula } = usarioData; // recebe os dados do usuário

            const usuarioExists = await Usuario.findOne({ where: { matricula } }); // verifica se o usuário já existe

            if (usuarioExists) { // se o usuário já existe
                return res.status(400).json({ error: 'Usuário já existe' }); // retorna erro
            }

            const emailExists = await Usuario.findOne({ where: { email } }); // verifica se o email já existe

            if (emailExists) { // se o email já existe
                return res.status(400).json({ error: 'Email já existe' }); // retorna erro
            }

            if (senha.length < 6) { // se a senha tem menos de 6 caracteres
                return res.status(400).json({ error: 'Senha muito curta' }); // retorna erro
            }

            if(!usuarioExists) { // se o usuário não existe
                
                const senhaEncriptada = await bcrypt.hash(senha, 10); // encripta a senha

                const usuario = await Usuario.create({ // cria o usuário
                    ...usarioData,
                    senha: senhaEncriptada
                });

                const token = jwt.sign({ matricula: usuario.matricula }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' }); // cria o token

                return res.status(200).json({error: false, usuario, token }); // retorna o usuário e o token
            }
        }

        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // cria um novo usuário

    async read (req, res) {

        try {
            const usuarios = await Usuario.findAll(); // lê todos os usuários

            return res.status(200).json(usuarios); // retorna todos os usuários
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // lê todos os usuários

    async update (req, res) {

        try {
            const { matricula } = req.params; // recebe a matricula do usuário
            const usuario = req.body; // recebe o corpo da requisição
            const { senha } = usuario; // recebe a senha do usuário

            const senhaEncriptada = await bcrypt.hash(senha, 10); // encripta a senha

            const updatedUsuario = await Usuario.update({ ...usuario, senha: senhaEncriptada }, { where: { matricula } }); // atualiza o usuário

            return res.status(200).json(updatedUsuario); // retorna o usuário atualizado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // atualiza um usuário

    async delete (req, res) {

        try {
            const { matricula } = req.params; // recebe a matricula do usuário

            const deletedUsuario = await Usuario.destroy({ where: { matricula } }); // deleta o usuário

            return res.status(200).json(deletedUsuario); // retorna o usuário deletado
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }


    }, // deleta um usuário

    async readOne (req, res) {

        try {
            const { matricula } = req.params; // recebe a matricula do usuário

            const usuario = await Usuario.findByPk(matricula); // lê um usuário

            return res.status(200).json(usuario); // retorna o usuário
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // lê um usuário

    async login (req, res) {
        
        try {
            
            const usuarioData = req.body; // recebe o corpo da requisição

            const { matricula, senha } = usuarioData; // recebe os dados do usuário

            const usuario = await Usuario.findByPk(matricula) // verifica se o usuário existe

            const { email, tipo_usuario, centro } = usuario; // recebe o email do usuário

            if (!usuario) { // se o usuário não existe
                return res.status(400).json({ error: 'Usuário não existe' }); // retorna erro
            }

            const senhaCorreta = await bcrypt.compare(senha, usuario.senha); // verifica se a senha está correta

            if (!senhaCorreta) { // se a senha não está correta

                return res.status(400).json({ error: 'Senha incorreta' }); // retorna erro
            
            } else {

                const token = jwt.sign({ matricula: usuario.matricula }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' }); // cria o token

                return res.status(200).json({error: false, token, matricula, email, tipo_usuario, centro }); // retorna o usuário e o token

            }
        }
        catch (err) {
            console.log(err); // loga o erro
            return res.status(500).json({ error: err.message }); // retorna o erro
        }

    }, // loga um usuário

    async changePassword (req, res) {
            
            try {
                const { matricula } = req.params; // recebe a matricula do usuário
                const { senha } = req.body; // recebe a senha do usuário
    
                const senhaEncriptada = await bcrypt.hash(senha, 10); // encripta a senha
    
                const updatedUsuario = await Usuario.update({ senha: senhaEncriptada }, { where: { matricula } }); // atualiza a senha do usuário
    
                return res.status(200).json(updatedUsuario); // retorna o usuário atualizado
            }
            catch (err) {
                console.log(err); // loga o erro
                return res.status(500).json({ error: err.message }); // retorna o erro
            }
    }, // altera a senha de um usuário

};