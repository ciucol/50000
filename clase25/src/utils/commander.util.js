const { Command } = require('commander')

const program = new Command()

const commander = () => {
  program.option(
    '-m, --mode <mode>',
    'Specifies the running mode',
    'development'
  )
  program.parse()

  const options = program.opts()
  return options.mode
}

module.exports = commander
