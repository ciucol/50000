const users = [
  {
    id: 1,
    name: 'Mate',
    email: 'mate@naran.com',
    password: 'mate123',
    role: 'user',
  },
  {
    id: 2,
    name: 'Titin',
    email: 'titin@naran.com',
    password: 'titin123',
    role: 'user',
  },
  {
    id: 3,
    name: 'Benja',
    email: 'benja@naran.com',
    password: 'benja123',
    role: 'user',
  },
  {
    id: 4,
    name: 'Arni',
    lastname: 'Fuentes',
    email: 'arni@fuentes.com',
    password: 'arni123',
    role: 'user',
  },
]

class UsersMongo {
  find() {
    return users
  }

  findOne(email) {
    return users.find(user => user.email === email)
  }
}

module.exports = UsersMongo
