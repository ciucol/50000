const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${process.cwd()}/src/public`))

router(app)

app.listen(3000, () => {
  console.log('Server running at port 3000')
})
