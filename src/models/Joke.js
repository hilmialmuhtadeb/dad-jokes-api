const mongoose = require('mongoose');
const { ObjectId, Schema } = mongoose;

const Joke = new Schema({
  joke: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Joke', Joke);