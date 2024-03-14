const express = require('express')
const compression = require('express-compression')
const router = require('./router')
const errorMiddleware = require('./middlewares/errors')

const app = express()

app.use(express.json())
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
)

router(app)

app.use(errorMiddleware)

app.listen(3000, () => {
  console.log(3000)
})
