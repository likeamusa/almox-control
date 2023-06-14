const database = require('../db');
const { DataTypes } = require('sequelize');

const BaseMaterial = database.define('base_material', {});

module.exports = BaseMaterial;