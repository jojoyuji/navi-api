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

module.exports = UserModel;
