const express = require('express');

const CentroController = require('../controller/centro');

const router = express.Router();

router.post('/', CentroController.create);

router.get('/', CentroController.read);

router.get('/:id', CentroController.readOne);

router.put('/:id', CentroController.update);

router.delete('/:id', CentroController.delete);

module.exports = router;