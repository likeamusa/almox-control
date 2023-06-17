const router = require('express').Router();

const FornecedorController = require('../controller/fornecedor');

router.post('/', FornecedorController.create);

router.get('/', FornecedorController.read);

router.put('/:id', FornecedorController.update);

router.delete('/:id', FornecedorController.delete);

router.get('/:id', FornecedorController.readOne);

module.exports = router;
