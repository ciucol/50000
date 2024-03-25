const winston = require('winston')

const winstonLogger = winston.createLogger({
  transports: [new winston.transports.Console({ level: 'error' })],
})

module.exports = winstonLogger
