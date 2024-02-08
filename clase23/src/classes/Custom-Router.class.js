const { Router } = require('express')

class CustomRouter {
  constructor() {
    this.router = Router()
    this.init()
  }

  init() {}

  getRouter() {
    return this.router
  }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  applyCallbacks(callbacks) {
    return callbacks.map(callback => (...params) => {
      try {
        callback.apply(this, params)
      } catch (error) {
        console.log(error)
        params[1].status(500).json({ error })
      }
    })
  }

  generateCustomResponses(req, res, next) {
    res.sendSuccess = message => {
      res.json({ status: 'success', message: message, statusCode: 200 })
    }

    res.sendCreateSuccess = message => {
      res
        .status(201)
        .json({ status: 'success', message: message, statusCode: 201 })
    }

    res.sendServerError = () => {
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        statusCode: 500,
      })
    }

    next()
  }

  handlePolicies(policies) {
    return (req, res, next) => {
      if (policies.includes('PUBLIC')) return next()

      const authHeaders = req.headers.authorization
      if (!authHeaders) return res.status(401).json({ error: 'Not Authorized' })

      const token = authHeaders.spli(' ')[1]
      const user = verifyToken(token)

      if (!policies.includes(user.role))
        return res.status(403).json({ error: 'Forbiden' })

      req.user = user
      next()
    }
  }
}

module.exports = CustomRouter
