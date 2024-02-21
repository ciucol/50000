const jwt = require('jsonwebtoken')

const SECRET = 'miSecreto'

const generateToken = user => {
  return jwt.sign(user, SECRET)
}

// const authenticateMiddleware = (req, res, next) => {
//   const authHeaders = req.headers.authorization
//   const token = authHeaders.split(' ')[1]

//   jwt.verify(token, SECRET, (error, credentials) => {
//     if (error) return res.json({ error })

//     req.user = credentials

//     next()
//   })
// }

module.exports = {
  generateToken,
  // authenticateMiddleware,
  SECRET,
}
