const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ status: 'success', message: 'resources' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.get(':id/', async (req, res) => {
  try {
    const { id } = req.params
    res.status(200).json({ status: 'success', message: 'resources' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const {} = req.body
    res.status(200).json({ status: 'success', message: 'resources' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router
