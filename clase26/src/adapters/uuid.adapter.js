const { v4: uuidv4 } = require('uuid')

class UuidAdapter {
  generateUuid() {
    return uuidv4()
  }
}

module.exports = UuidAdapter
