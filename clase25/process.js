const process = require('node:process')

console.log(process.cwd())

console.log(process.pid)

console.log(process.memoryUsage())

console.log(process.version)

console.log(process.env.CODER)

console.log(process.argv.slice(2))

if (process.argv[2] === '-p') {
  console.log(`El puerto es ${process.argv[3]}`)
}

if (process.argv[2] === '-u') {
  console.log(`El usuario es ${process.argv[3]}`)
}
