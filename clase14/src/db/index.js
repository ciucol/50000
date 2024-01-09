const mongoose = require('mongoose')

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.6to5yzc.mongodb.net/coder50000?retryWrites=true&w=majority'
    )
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoConnect
