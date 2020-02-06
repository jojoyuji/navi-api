const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId ;
const ctrl = require('./courses.ctrl');

module.exports = function(app) {
  router.get('/courses', ctrl.indexed);
  router.post('/courses', ctrl.created);
  router.get('/courses/:id', ctrl.showed);
  router.put('/courses/:id', ctrl.updated);
  router.delete('/courses/:id', ctrl.deleted);

  app.use(router);
};


