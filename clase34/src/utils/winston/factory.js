const { environment } = require('../../configs/app.config')

switch (environment) {
  case 'dev':
    module.exports = require('./devLogger')
    break

  case 'prod':
    module.exports = require('./prodLogger')
    break
}
