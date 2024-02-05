const roles = role => {
  return (req, res, next) => {
    console.log(req.user)
    if (req.user.role !== role)
      return res.status(403).json({ error: 'Forbiden' })

    next()
  }
}

module.exports = roles
