const { Router } = require('express')
const generateUsers = require('../utils/users-mock.util')
const CustomError = require('../handlers/errors/Custom-Error')
const generateUserErrorInfo = require('../handlers/errors/generate-user-error-info')
const EErrors = require('../handlers/errors/enum-errors')
const TYPES_ERRORS = require('../handlers/errors/types.errors')

const router = Router()

const users = []

router.get('/', (req, res) => {
  const { numUsers = 1 } = req.query

  const users = generateUsers(numUsers)
  res.json({ status: 'success', message: users })
})

router.post('/', (req, res) => {
  const { name, lastname, email } = req.body

  if (!name || !lastname || !email) {
    CustomError.createError({
      name: TYPES_ERRORS.USER_CREATION_ERROR,
      cause: generateUserErrorInfo({ name, lastname, email }),
      message: 'Error trying to create User',
      code: EErrors.INVALID_USER_INFO,
    })
  }

  const user = {
    name,
    lastname,
    email,
  }

  users.push(user)
  res.status(201).json({ status: 'success', message: user })
})

module.exports = router
