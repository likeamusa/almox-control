const express = require('express');

const LoteController = require('../controller/lote');

const router = express.Router();

router.post('/', LoteController.create); // cria um novo lote

router.get('/', LoteController.read); // lê todos os lotes

router.put('/:lote', LoteController.update); // atualiza um lote

router.get('/:lote', LoteController.readOne); // lê um lote

router.delete('/:lote', LoteController.delete); // deleta um lote

module.exports = router; // exporta o router de lote