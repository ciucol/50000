const User = require('../class/User.class')

class UserBuilder {
  #name = null
  #lastname = null
  #email = null
  #city = null
  #country = null

  setName(name) {
    this.#name = name
    return this
  }

  setLastname(lastname) {
    this.#lastname = lastname
    return this
  }

  setEmail(email) {
    this.#email = email
    return this
  }

  setCity(city) {
    this.#city = city
    return this
  }

  setCountry(country) {
    this.#country = country
    return this
  }

  build() {
    return new User(
      this.#name,
      this.#lastname,
      this.#email,
      this.#city,
      this.#country
    )
  }
}

module.exports = UserBuilder
