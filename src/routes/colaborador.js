const express = require('express');

const ColaboradorController = require('../controller/colaborador');

const router = express.Router();

router.post('/', ColaboradorController.create);

router.get('/', ColaboradorController.read);

router.put('/:matricula', ColaboradorController.update);

router.delete('/:matricula', ColaboradorController.delete);

module.exports = router;