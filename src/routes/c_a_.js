const express = require('express');

const C_A_Controller = require('../controller/c_a_');

const router = express.Router();

router.post('/', C_A_Controller.create); // cria um novo certificado de autenticação

router.get('/', C_A_Controller.read); // lê todos os certificados de autenticação

router.put('/:c_a_', C_A_Controller.update); // atualiza um certificado de autenticação

router.get('/:material_id', C_A_Controller.readOne); // lê todos os certificados de autenticação de um material

router.delete('/:c_a_', C_A_Controller.delete); // deleta um certificado de autenticação

module.exports = router; // exporta o router de certificado de autenticação