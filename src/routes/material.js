const express = require('express');

const MaterialController = require('../controller/material');

const router = express.Router();

router.post('/', MaterialController.create);

router.get('/', MaterialController.read);

router.get('/:id', MaterialController.readById);

router.put('/:id', MaterialController.update);

router.delete('/:id', MaterialController.delete);

module.exports = router;