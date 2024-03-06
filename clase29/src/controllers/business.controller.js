const { Router } = require('express')
const businessService = require('../services/business.service')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const business = await businessService.getAll()
    res.status(200).json({ status: 'success', message: business })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const business = await businessService.getById(id)
    res.status(200).json({ status: 'success', message: business })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name } = req.body

    const newBusinessInfo = {
      name,
    }
    const newBusiness = await businessService.create(newBusinessInfo)
    res.status(200).json({ status: 'success', message: newBusiness })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/:id/products', async (req, res) => {
  try {
    const { id } = req.params
    const product = req.body

    const newProductInfo = {
      product,
    }

    const result = await businessService.addProduct(id, newProductInfo)
    res.status(200).json({ status: 'success', message: result })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router
