const mongoose = require('mongoose')
const UserModel = require('./user.model');
const ObjectId = mongoose.Types.ObjectId ;

function created(req, res) {
  const { name, email } = req.body;
  const newUser = UserModel.create({name, email}).then(function(doc, error) {
    res.send(doc);
  });
}
function indexed(req, res) {
  UserModel
  .find()
  .then(function(doc, error) {
    res.send(doc);
  });
}

function showed(req, res) {
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
}

function updated(req, res) {
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
}

function deleted(req, res) {
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
}
module.exports = {
    created,
    indexed,
    showed,
    updated,
    deleted,
  }
