const messageManager = require('../repositories')

const users = []

const create = async newUserInfo => {
  users.push(newUserInfo)

  await messageManager.sendMessage(newUserInfo)

  return users
}

module.exports = {
  create,
}
