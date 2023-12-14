const { Router } = require('express')

const router = Router()

router.get('/users', (req, res) => {
  const users = {
    name: 'Mate',
  }

  res.render('users', {
    users,
    style: 'users.css',
  })
})

router.get('/products', (req, res) => {
  const users = {
    name: 'Mate',
    role: 'admin',
  }

  const products = [
    {
      id: 1,
      name: 'PS5',
      price: 400,
    },
    {
      id: 2,
      name: 'Nintendo Switch',
      price: 300,
    },
    {
      id: 3,
      name: 'xBox',
      price: 500,
    },
  ]
  res.render('products', {
    products,
    users,
    style: 'products.css',
    isAdmin: users.role === 'admin',
    title: 'Products',
  })
})

module.exports = router
