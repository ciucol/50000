const mongoose = require('mongoose')

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/?retryWrites=true&w=majority&appName=Coder50000'
    )
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoConnect
