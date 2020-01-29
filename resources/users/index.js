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

const ObjectId = mongoose.Types.ObjectId ;

module.exports = function(app) {
  router.get('/users', function(req, res) {
    UserModel
    .find()
    .then(function(doc, error) {
      res.send(doc);
    });
  });

  router.post('/users', function(req, res) {
    const { name, email } = req.body;
    const newUser = UserModel.create({name, email}).then(function(doc, error) {
      res.send(doc);
    });
  });

  router.get('/users/:id', function(req, res) {
    const { id } = req.params
    if(!ObjectId.isValid(id)) {
      return res.send(null);
    }
    UserModel
    .findOne({
      _id: id,
      deletedAt: { $exists: false }
    })
    .then(function(doc, error) {
      res.send(doc);
    });
  });

  router.put('/users/:id', function(req, res) {
    const { id } = req.params;
    if(!ObjectId.isValid(id)) {
      return res.send(null);
    }
    const toUpdate = req.body;
    UserModel
    .findOneAndUpdate({
      _id: id,
      deletedAt: { $exists: false }
    },
    toUpdate,
    {new: true})

    .then(function(doc, error) {
      res.send(doc);
    });
  });

  router.delete('/users/:id', function(req, res) {
    const { id } = req.params;
    if(!ObjectId.isValid(id)) {
      return res.send(null);
    }
    UserModel
    .findOneAndDelete({
      _id: id,
    })
    .then(function(doc, error) {
      res.send(doc);
    });
  });


  app.use(router);
};


