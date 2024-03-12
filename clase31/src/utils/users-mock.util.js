const { faker } = require('@faker-js/faker')

const generateUsers = numUsers => {
  const users = []
  for (let i = 0; i < numUsers; i++) {
    users.push(generateUser())
  }

  return users
}

const generateUser = () => {
  const numOfProducts = faker.string.numeric({ length: 1 })

  const products = []

  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProduct())
  }

  return {
    name: faker.person.firstName(),
    lastname: faker.person.lastName(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    role: faker.helpers.arrayElement(['Cliente', 'Vendedor']),
    products,
  }
}

const generateProduct = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr({ category: 'food' }),
    stock: faker.string.numeric({ length: 2, exclude: ['0'] }),
  }
}

module.exports = generateUsers
