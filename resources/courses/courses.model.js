const mongoose = require('mongoose')
const Course = new mongoose.Schema(
  {
    name: {
      type: String,
      default: ''
    }
  },
  {timestamps: true}
);

const CourseModel = mongoose.model('Course', Course);

module.exports = CourseModel;
