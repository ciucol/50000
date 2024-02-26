const UuidAdapter = require('../adapters/uuid.adapter')
const CodeGeneratorBuilder = require('./code-generator.builder')

const codeGenerator = new CodeGeneratorBuilder(new UuidAdapter())

module.exports = codeGenerator
