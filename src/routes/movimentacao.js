const router = require('express').Router();

const MovimentacaoController = require('../controller/movimentacao');

router.post('/', MovimentacaoController.create);

router.get('/', MovimentacaoController.read);

router.put('/:id_mov', MovimentacaoController.autorize);

module.exports = router;