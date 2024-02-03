function publicAccess(req, res, next) {
  if (req.session.user) res.redirect('/')

  next()
}

module.exports = publicAccess
