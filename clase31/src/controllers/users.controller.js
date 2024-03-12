const { Router } = require('express')
const generateUsers = require('../utils/users-mock.util')
const User = require('../class/User.class')
const UserBuilder = require('../builders/user.builder')

const users = []
const router = Router()

router.get('/', (req, res) => {
  const { numUsers = 1 } = req.query

  const user = generateUsers(numUsers)

  res.json({ message: user })
})

router.post('/', (req, res) => {
  // const user = new User('Mate', 'Naran', 'mate@naran.com', null, 'col')
  const userBuilder = new UserBuilder()

  const user = userBuilder
    .setEmail('mate@naran.com')
    .setLastname('Naran')
    .setCountry('col')
    .build()

  users.push(user)

  res.json({ message: users })
})

module.exports = router
