const { Command } = require('commander')

const program = new Command()

program
  .option('-p, --port <port>', 'Puerto del servidor', 3000)
  .requiredOption('-u, --user <user>', 'Usuario del sistema')
  .option('-d', 'Variable para debug')
  .option('-l, --letters [letter...]')
program.parse()

console.log('Options: ', program.opts())
console.log('Remaining arguments: ', program.args)
