const getLogger = require('../utils/winston/factory')

const logger = (req, res, next) => {
  req.logger = getLogger

  req.logger.http(
    `${req.method} - ${req.url} / ${
      req.headers['user-agent']
    } - ${new Date().toUTCString()}`
  )

  next()
}

module.exports = logger
