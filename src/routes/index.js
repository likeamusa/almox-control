const express = require('express');

const baseMaterialRoutes = require('./base-material');

const routes = express.Router();

routes.use('/base-material', baseMaterialRoutes);

module.exports = routes;