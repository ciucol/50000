const { environment } = require('../configs/app.config')
const mongoConnect = require('../db')

switch (environment) {
  case 'dev':
    console.log('factory DAO memory')
    module.exports = require('../DAO/memory/users-memory.dao')
    break

  case 'prod':
    console.log('factory DAO mongo')
    mongoConnect()
    module.exports = require('../DAO/mongo/users-mongo.dao')
    break

  default:
    break
}
