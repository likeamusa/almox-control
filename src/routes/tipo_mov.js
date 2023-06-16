const express = require('express');

const TipoMovController = require('../controller/tipo_mov');

const router = express.Router();

router.post('/', TipoMovController.create);

router.get('/', TipoMovController.read);

router.put('/:tipo', TipoMovController.update);

router.delete('/:tipo', TipoMovController.delete);

module.exports = router;