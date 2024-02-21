const extractJwtCookie = req => {
  if (req && req.cookies) {
    const tokenKey = 'authToken'
    return req.cookies[tokenKey] || null
  }

  return null
}

module.exports = extractJwtCookie
