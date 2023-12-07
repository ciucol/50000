function convertToNumber(req, res, next) {
  req.params.id = Number(req.params.id)
  next()
}

module.exports = {
  convertToNumber,
}
