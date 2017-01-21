var routes = require('express').Router();
var users = require('./users');

routes.use('/users', users);

module.exports = routes;
