const winston = require('winston')
const customWinston = require('./custom.winston')

// winston.addColors(customWinston.colors)

const winstonLogger = winston.createLogger({
  levels: customWinston.levels,
  transports: [
    new winston.transports.Console({
      level: 'http',
      format: winston.format.combine(
        winston.format.colorize({ colors: customWinston.colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: 'warning-errors.log',
      level: 'warning',
      format: winston.format.simple(),
    }),
  ],
})

module.exports = winstonLogger
