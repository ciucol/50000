function authMiddleware(req, res, next) {
  if (req.session.user) return next()

  res.redirect('/login')
}

module.exports = authMiddleware
