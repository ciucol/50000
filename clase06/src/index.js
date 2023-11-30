const express = require('express')

const app = express()
const port = 3000

const users = [
  {
    id: 1,
    name: 'Mate',
    country: 'col',
    carts: [
      {
        id: 123,
        products: [],
        status: false,
      },
      {
        id: 567,
        products: [],
        status: false,
      },
      {
        id: 8765,
        products: [],
        status: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Titin',
    country: 'arg',
  },
  {
    id: 3,
    name: 'Benja',
    country: 'col',
  },
]

app.get('/greet', (req, res) => {
  res.json({ message: 'Hi coders' })
})

app.get('/welcome', (req, res) => {
  res.send(`
    <html>
      <body style="background-color:black">
        <h1 style="color:blue">Hi coders</h1>
        <p style="color:white">Welcome to the jungle</p>
      </body>
    </html>
  `)
})

app.get('/users', (req, res) => {
  const { country, age, order } = req.query

  if (country) {
    const usersResponse = users.filter(user => user.country === country)
    return res.json({ message: users })
  }

  res.json({ message: users })
})

app.get('/users/:uid', (req, res) => {
  const user = users.find(user => user.id === Number(req.params.uid))
  res.json({ message: user })
})

app.get('/users/:uid/carts', (req, res) => {
  const { carts } = users.find(user => user.id === Number(req.params.uid))
  res.json({ message: carts })
})

app.get('/users/:uid/carts/:cid', (req, res) => {
  const { uid, cid } = req.params

  const { carts } = users.find(user => user.id === Number(uid))
  const cart = carts.find(cart => cart.id === Number(cid))
  res.json({ message: cart })
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
