const router = require('express').Router(); // importa o router do express

const LaudoController = require('../controller/laudo'); // importa o controller de laudo

router.post('/', LaudoController.create); // cria um novo laudo

router.get('/', LaudoController.read); // lê todos os laudos

router.put('/:laudo', LaudoController.update); // atualiza um laudo

router.get('/:laudo', LaudoController.readOne); // lê um laudo

router.delete('/:laudo', LaudoController.delete); // deleta um laudo

module.exports = router; // exporta o router de laudo