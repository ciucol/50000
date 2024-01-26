const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fileStore = require('session-file-store')
const MongoStore = require('connect-mongo')
const handlebars = require('express-handlebars')
const router = require('./router')
const mongoConnect = require('./db')

const fileStorage = fileStore(session)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(process.cwd() + '/src/public'))
app.use(
  session({
    secret: 'coderSecret',
    // store: new fileStorage({ path: './sessions', ttl: 600000 }),
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/sessions?retryWrites=true&w=majority',
    }),
    resave: false,
    saveUninitialized: false,
  })
)

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')

router(app)

mongoConnect()

app.listen(3000, () => {
  console.log('Server running at 3000')
})
