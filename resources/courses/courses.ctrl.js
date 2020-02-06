const mongoose = require('mongoose')
const CourseModel = require('./courses.model');
const ObjectId = mongoose.Types.ObjectId ;

function created(req, res) {
  const { name } = req.body;
  const newUser = CourseModel.create({name}).then(function(doc, error) {
    res.send(doc);
  });
}
function indexed(req, res) {
  CourseModel
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
  CourseModel
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
  CourseModel
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
  CourseModel
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
