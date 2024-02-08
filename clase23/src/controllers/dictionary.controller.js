const { Router } = require('express')

const router = Router({
  caseSensitive: true,
})

const words = ['perro', 'gato', 'loro', 'conejo']

router.param('word', (req, res, next, word) => {
  const searchWord = words.find(wordArray => wordArray === word)

  if (!searchWord) {
    req.params.word = null
    req.word = null
  } else {
    req.params.word = searchWord
    req.word = searchWord
  }

  //   req.params.number = Number(req.params.number)

  next()
})

router.get(
  '/:word([a-zA-Z ]+)',
  authentication,
  authorization(['admin', 'seller']),
  (req, res) => {
    const { word } = req.params

    res.json({ status: 'success', message: word })
  }
)

module.exports = router

function authentication(req, res, next) {
  token = headers
  jwt.verify(token)
  req.user = {
    role: 'user',
  }

  next()
}

function authorization(role) {
  return (req, res, next) => {
    if (role.includes(req.role))
      return res.status(403).json({ error: 'Forbiden' })

    next()
  }
}
