const express = require('express')
const handlebars = require('express-handlebars')
const { port } = require('./configs/server.config')
const router = require('./router')

const app = express()

app.use(express.static(process.cwd() + '/src/public'))

router(app)

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
