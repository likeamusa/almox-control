const router = require('express').Router();

const NotaController = require('../controller/nota');

router.post('/', NotaController.create);

router.get('/', NotaController.read);

router.put('/:n_nota', NotaController.update);

router.delete('/:n_nota', NotaController.delete);

router.get('/:n_nota', NotaController.readOne);

module.exports = router;
