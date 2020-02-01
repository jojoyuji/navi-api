const express = require('express');
const router = express.Router();
const UserModel = require('./user.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId ;
const ctrl = require('./user.ctrl');

module.exports = function(app) {
  router.get('/users', ctrl.indexed);
  router.post('/users', ctrl.created);
  router.get('/users/:id', ctrl.showed);
  router.put('/users/:id', ctrl.updated);
  router.delete('/users/:id', ctrl.deleted);

  app.use(router);
};


