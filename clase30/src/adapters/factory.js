const { environment } = require('../configs/app.config')

switch (environment) {
  case 'dev':
    console.log('Vamos a usar nodemailer')
    module.exports = require('./mail.adapter')
    break

  case 'prod':
    console.log('Vamos a usar twilio')
    module.exports = require('./sms.adapter')
    break

  default:
    break
}
