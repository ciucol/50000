require('dotenv').config()

module.exports = {
  email: {
    identifier: process.env.EMAIL_IDENTIFIER,
    password: process.env.EMAIL_PASSWORD,
  },
  sms: {
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAccountToken: process.env.TWILIO_ACCOUNT_TOKEN,
    twilioSmsNumber: process.env.TWILIO_SMS_NUMBER,
  },
}
