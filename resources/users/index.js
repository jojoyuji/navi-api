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
  {timestamps: true}
);

const UserModel = mongoose.model('User', User);
// ENDMODEL

module.exports = function(app) {
  router.get('/users', function(req, res) {
    UserModel
    .find()
    .then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  router.post('/users', function(req, res) {
    const { name, email } = req.body;
    const newUser = UserModel.create({name, email}).then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  router.get('/users/:id', function(req, res) {
    const { id } = req.params
    UserModel
    .findOne({
      _id: id,
      deletedAt: { $exists: false }
    })
    .then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  router.put('/users/:id', function(req, res) {
    const { id } = req.params;
    const toUpdate = req.body;
    UserModel
    .findOneAndUpdate({
      _id: id,
      deletedAt: { $exists: false }
    },
    toUpdate,
    {new: true})

    .then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });
  });

  router.delete('/users/:id', function(req, res) {
    const { id } = req.params;
    UserModel
    .findOneAndDelete({
      _id: id,
    })
    .then(function(doc, error) {
      console.log(doc);
      res.send(doc);
    });


  });


  app.use(router);
};


