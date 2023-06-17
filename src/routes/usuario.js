const express = require('express');

const UsuarioController = require('../controller/usuario');

const router = express.Router();

router.post('/', UsuarioController.create);

router.get('/', UsuarioController.read);

router.put('/:matricula', UsuarioController.update);

router.delete('/:matricula', UsuarioController.delete);

router.post('/:matricula', UsuarioController.readOne);

module.exports = router;
