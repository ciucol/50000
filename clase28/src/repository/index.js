const UsersRepository = require('./users.repository')
const UsersFactory = require('../factory/users.factory')

const usersRepository = new UsersRepository(new UsersFactory())

module.exports = usersRepository
