const router = require('express').Router();

const Ca_materialController = require('../controller/ca_material');

router.post('/', Ca_materialController.create);

router.get('/', Ca_materialController.read);

module.exports = router;