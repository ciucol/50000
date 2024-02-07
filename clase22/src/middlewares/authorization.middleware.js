const authorization = role => {
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).json({ status: 'error', error: 'Unauthorized' })

    if (req.user.role !== role)
      return res.status(403).json({ status: 'error', error: 'Forbiden' })

    next()
  }
}

module.exports = authorization
