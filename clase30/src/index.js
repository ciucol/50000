const { port } = require('./configs/app.config')
const app = require('./server')

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
