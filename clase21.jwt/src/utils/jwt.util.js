const jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'loquequeramos'

const generateToken = user => {
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '30m' })
  return token
}

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' })

  const token = authHeader.split(' ')[1]

  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    if (error) return res.status(403).json({ error: 'Token not valid' })

    req.user = credentials.user

    next()
  })
}

module.exports = {
  generateToken,
  authToken,
}
