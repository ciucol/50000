const bcrypt = require('bcrypt')

const createHash = password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

const useValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

module.exports = {
  createHash,
  useValidPassword,
}
