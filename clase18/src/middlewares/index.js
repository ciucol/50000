const authentication = require('./authentication.middleware')
const authorization = require('./authorization.middleware')

module.exports = {
  authentication,
  authorization,
}
