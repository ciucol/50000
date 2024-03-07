const nodemailer = require('nodemailer')
const { email } = require('../configs/services.config')
const services = require('../constants/services.constants')

const transport = nodemailer.createTransport({
  service: services.EMAIL,
  port: services.EMAIL_PORT,
  auth: {
    user: email.identifier,
    pass: email.password,
  },
})

module.exports = transport
