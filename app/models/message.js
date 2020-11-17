const mongoose = require('mongoose')
// const userSchema = require('./user')

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  nickName: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', messageSchema)
