const { Router } = require('express')
const {
  convertToNumber,
} = require('../middlewares/convert-to-number.middleware')
const uploader = require('../utils/multer.util')

const router = Router()

const users = []

router.get('/', (req, res) => {
  res.json({ payload: users })
})

router.get('/:id', convertToNumber, (req, res) => {
  console.log(typeof req.params.id)
  const { id } = req.params
  const user = users.find(user => user.id === id)
  res.json({ payload: user })
})

router.post('/', uploader.single('img'), (req, res) => {
  const { name, lastname, email, file } = req.body

  const pathFile = req.file.path

  const newUserInfo = {
    id,
    name,
    lastname,
    email,
    profile: pathFile,
  }

  users.push(newUserInfo)
  res.json({ payload: users })
})

module.exports = users
