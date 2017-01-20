const mongoose = require('mongoose');


// define the User model schema
const PostSchema = new mongoose.Schema({
    title: String,
Descrption: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

});
module.exports = mongoose.model('Post', PostSchema);