const express = require('express');

const MaterialRoutes = require('./material');
const ColaboradorRoutes = require('./colaborador');
const CentroRoutes = require('./centro');
const TipoMovRoutes = require('./tipo_mov');

const routes = express.Router();

routes.use('/material', MaterialRoutes);

routes.use('/colaborador', ColaboradorRoutes);

routes.use('/centro', CentroRoutes);

routes.use('/tipo_mov', TipoMovRoutes);

module.exports = routes;