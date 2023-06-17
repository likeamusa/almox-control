const router = require('express').Router();

const MovimentacaoController = require('../controller/movimentacao');

router.post('/', MovimentacaoController.create);

router.get('/', MovimentacaoController.read);

module.exports = router;