const mongoose = require('mongoose')

const usersCollection = 'user'

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  gender: String,
  pets: {
    type: [
      {
        pet: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'pet',
        },
      },
    ],
  },
})

usersSchema.pre('find', function () {
  this.populate('pets.pet')
})

const Users = mongoose.model(usersCollection, usersSchema)

module.exports = Users
