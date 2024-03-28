const process = require('node:process')
const cluster = require('node:cluster')
const { cpus } = require('node:os')

if (cluster.isPrimary) {
  console.log(`${process.pid} is primary`)

  const numCores = cpus().length
  for (let i = 0; i < numCores; i++) {
    cluster.fork()
  }
} else {
  console.log(`${process.pid} is secondary`)
}
