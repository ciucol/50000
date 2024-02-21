const passport = require('passport')
const jwt = require('passport-jwt')
const extractJwtCookie = require('../utils/extract-jwt-cookie.util')
const { SECRET } = require('../utils/jwt.util')

const jwtStrategy = jwt.Strategy
const ExtractJwt = jwt.ExtractJwt

const initializePassport = () => {
  passport.use(
    'jwt',
    new jwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([extractJwtCookie]),
        secretOrKey: SECRET,
      },
      (credentials, done) => {
        console.log('🚀 ~ initializePassport ~ credentials:', credentials)
        try {
          done(null, credentials)
        } catch (error) {
          console.log('🚀 ~ initializePassport ~ error:', error)
          done(error)
        }
      }
    )
  )
}

module.exports = initializePassport
