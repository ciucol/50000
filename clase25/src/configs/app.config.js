const dotenv = require('dotenv')
const commander = require('../utils/commander.util')

const mode = commander()

dotenv.config({
  // path: `./.env.${process.env.ENVIRONMENT}`,
  path: `./.env.${mode}`,
})

module.exports = {
  port: process.env.PORT,
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
}
