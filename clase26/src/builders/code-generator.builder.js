class CodeGeneratorBuilder {
  constructor(uuidAdapter) {
    this.uuidAdapter = uuidAdapter
  }

  generateUuid() {
    return this.uuidAdapter.generateUuid()
  }
}

module.exports = CodeGeneratorBuilder
