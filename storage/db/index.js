const mongoose = require('mongoose');

// Плагины
const toClientPlugin = require('./plugins/toClient');
mongoose.plugin(toClientPlugin);

const db = mongoose.connection;

module.exports = db;