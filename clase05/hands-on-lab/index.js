const UserManager = require('./class/user-manager.class')

const userManager = new UserManager()

const users = async () => {
  const newUser = {
    name: 'Mate',
    lastname: 'Naran',
    username: 'matenaran',
    password: 'mate123',
  }

  // userManager.createUser(newUser)
  // const users = await userManager.getUsers()

  userManager.validateUser('matenaran', 'mate123')
}

users()
