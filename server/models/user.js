const mongoose = require('mongoose');


// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('User', UserSchema);