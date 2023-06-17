const router = require('express').Router();

const ArquivoController = require('../controller/arquivo');

router.post('/', ArquivoController.create);

router.put('/:id', ArquivoController.update);

router.delete('/:id', ArquivoController.delete);

router.get('/', ArquivoController.read);

router.get('/:id', ArquivoController.readOne);

module.exports = router;