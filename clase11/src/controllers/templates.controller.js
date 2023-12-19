const { Router } = require('express')

const router = Router()

router.get('/chat', (req, res) => {
  res.render('chat.handlebars')
})

module.exports = router
