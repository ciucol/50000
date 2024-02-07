const cookieExtractor = req => {
  if (req && req.cookies) {
    const tokenKey = 'authToken'
    return req.cookies[tokenKey] || null
  }

  return null
}

module.exports = cookieExtractor
