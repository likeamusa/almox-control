const router = require('express').Router();

const MovimentacaoController = require('../controller/movimentacao');

router.post('/', MovimentacaoController.create);

router.get('/', MovimentacaoController.read);

router.put('/:id_mov', MovimentacaoController.autorize);

router.get('/:id_mov', MovimentacaoController.readOne);

module.exports = router;