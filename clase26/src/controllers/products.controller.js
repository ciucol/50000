const { Router } = require('express')
const productsService = require('../services/products.service')

const router = Router()

router.get('/', (req, res) => {
  const products = productsService.getAll()
  res.json({ message: products })
})

router.post('/', (req, res) => {
  const { name, description, price } = req.body

  const newProduct = {
    name,
    description,
    price,
  }

  const newProductMessage = productsService.create(newProduct)

  res.json({ message: newProductMessage })
})

module.exports = router
