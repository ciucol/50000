const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Users' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Users' })
})

module.exports = router
