const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const router = require('./router')
const mongoConnect = require('./db')
const initializePassport = require('./configs/passport.config')
const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(process.cwd() + '/src/public'))
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/clase20Session?retryWrites=true&w=majority',
    }),
    secret: 'ConLoQueQueramos',
    resave: false,
    saveUninitialized: false,
  })
)

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')

router(app)

mongoConnect()

app.listen(3000, () => {
  console.log('Server running at port 3000')
})
