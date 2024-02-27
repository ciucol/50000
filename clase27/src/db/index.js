const mongoose = require('mongoose')

// class MongoConnect {
//   static #instance
//   constructor() {
//     mongoose.connect(
//       'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/?retryWrites=true&w=majority&appName=Coder50000'
//     )
//   }

//   static getInstance() {
//     if (this.#instance) {
//       console.log('ya existe la conexión')
//       return this.#instance
//     }

//     this.#instance = new MongoConnect()
//     console.log('nueva conexión')
//     return this.#instance
//   }
// }

class MongoConnect {
  static #instance

  constructor() {
    this.mongoConnect()
  }

  async mongoConnect() {
    try {
      await mongoose.connect(
        'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/?retryWrites=true&w=majority&appName=Coder50000'
      )
      console.log('db is connected')
    } catch (error) {
      console.log(error)
    }
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new MongoConnect()
      console.log('original')

      return this.#instance
    }

    console.log('copia')
    return this.#instance
  }
}

// const mongoConnect = async () => {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/?retryWrites=true&w=majority&appName=Coder50000'
//     )
//     console.log('db is connected')
//   } catch (error) {
//     console.log(error)
//   }
// }

module.exports = MongoConnect
