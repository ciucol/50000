function authentication(req, res, next) {
  console.log(req.session)
  if (req.session.username === 'Mate') {
    return next()
  }

  return res.status(401).json({ error: 'Unauthorized' })
}

module.exports = authentication
