const { faker } = require('@faker-js/faker')

const generateUsers = numUsers => {
  const users = []

  for (let i = 0; i < numUsers; i++) {
    users.push(generateUser())
  }

  return users
}

const generateUser = () => {
  const name = faker.name.firstName()
  const lastname = faker.name.lastName()
  return {
    name,
    lastname,
    email: faker.internet.email(name, lastname),
    password: faker.internet.password(),
  }
}

module.exports = generateUsers
