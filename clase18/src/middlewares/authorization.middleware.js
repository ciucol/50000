function authorization(req, res, next) {
  console.log(req.session)
  if (req.session.role === 'superadmin') {
    return next()
  }

  return res.status(403).json({ error: 'Forbiden' })
}

module.exports = authorization
