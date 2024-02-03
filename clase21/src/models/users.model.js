const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'superAdmin'],
    default: 'user',
  },
  githubId: Number,
  githubUsername: String,
  gmailId: Number,
  facebookId: Number,
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
