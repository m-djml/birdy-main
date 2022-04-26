const router = require('express').Router()
const User = require('../entities/users')
router.route('/register')
  .get((req, res) => {
    res.send('Hello')
  })

  module.exports = router
