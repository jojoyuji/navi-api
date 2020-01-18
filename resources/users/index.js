const express = require('express');
const router = express.Router();

// MODEL
const mongoose = require('mongoose')
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);
const UserModel = mongoose.model('User', User);
// ENDMODEL


module.exports = function(app) {
  router.get('/users', function(req, res) {
    console.log('bateu em /users')
    UserModel
    .find()
    .then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  // POST /users //cria um novo usuario
  // PUT /users/id // atualiza o usuario
  router.post('/users', function(req, res) {
    console.log(req);
    const { name, email } = req.body;
    const newUser = UserModel.create({name, email}).then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  app.use(router);
};


