const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const router = require('./router')
const initializePassport = require('./configs/passport.config')

const app = express()

app.use(express.json())
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

router(app)

app.listen(3000, () => {
  console.log(3000)
})
