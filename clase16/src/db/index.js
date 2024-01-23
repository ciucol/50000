const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/mongoAvanzado1?retryWrites=true&w=majority'
    )
    console.log('DB is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect
