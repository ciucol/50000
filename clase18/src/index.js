const express = require('express')
const cookieParser = require('cookie-parser')
const { cookieKey } = require('./config/security')
const session = require('express-session')
const { authentication, authorization } = require('./middlewares')
// const authentication = require('./middlewares/authentication.middleware')
// const authorization = require('./middlewares/authorization.middleware')

const app = express()

app.use(express.json())
app.use(cookieParser(cookieKey))
app.use(
  session({
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true,
  })
)

app.get('/session', (req, res) => {
  if (req.session.counter) {
    req.session.name = 'Titin'
    req.session.counter++
    console.log(req.session)
    return res.json({
      message: `Se ha visitado el sitio ${req.session.counter} veces`,
    })
  }

  req.session.counter = 1
  console.log(req.session)
  res.json({ message: 'Welcome' })
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) return res.json({ message: 'Logout' })
    res.json({ error: err })
  })
})

app.get('/setCookie', (req, res) => {
  res
    .cookie('coderCookie', JSON.stringify({ products: 'ps5', price: 500 }))
    .send('Cookie')
})

app.get('/getCookies', (req, res) => {
  console.log(req.cookies)
  console.log(req.signedCookies)

  res.json({ message: 'Get Cookies' })
})

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('coderCookie').json({ message: 'Cookie removed' })
})

app.get('/setSignedCookie', (req, res) => {
  res
    .cookie('SignedCookie', 'Esta es informaci€on no tan importante', {
      signed: true,
    })
    .json({ message: 'Cookie signed' })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (email !== 'mate@naran.com')
    return res.status(400).json({ message: 'Bad request' })
  if (password !== 'mate123')
    return res.status(400).json({ message: 'Bad request' })

  const user = {
    id: 123,
    name: 'Mate',
    role: 'admin',
  }

  req.session.username = user.name
  req.session.role = user.role

  res.json({ message: 'Iniciaste sesión' })
})

const users = [
  {
    id: 123,
    name: 'Anto',
  },
  {
    id: 456,
    name: 'Mate',
  },
]

app.get('/profile', (req, res) => {
  const session = JSON.parse(req.signedCookies.session)
  console.log('🚀 ~ app.get ~ session:', session)

  const user = users.find(user => {
    return user.id === session.id
  })

  res.json({
    message: user.name,
  })
})

app.get('/users', authentication, authorization, (req, res) => {
  res.json({ message: users })
})

app.listen(3000, () => {
  console.log('Server running at 3000')
})
