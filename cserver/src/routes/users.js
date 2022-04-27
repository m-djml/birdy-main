const router = require('express').Router()
const User = require('../entities/users')
const validerInscription = require('../validation/register')

router.route('/register')
  .get((req, res) => {
    const {isValid, errors} = validerInscription(req.body)

    if (!isValid){ return res.status(404).json(errors)}

    User.findOne({login: req.body})
        .then(user => {
          if (user) {
            errors.login = 'Ce login est pris !'
          }
          const newUser = new User({
            login: req.body.login,
            password: req.body.password
          })
          newUser.save()
            .then(newUser => res.json(newUser))
            .catch(err => console.log(err))
        })

    return res.send('OK!');
  })

  module.exports = router
