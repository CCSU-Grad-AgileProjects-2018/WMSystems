const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    accounts: {type: Array},
  });

  var User = mongoose.model('User', userSchema);

  module.exports = User;