const router = require('express').Router()
const User = require("../entities/users.js");
const validerInscription = require('../validation/register')

router.route('/register')
  .post((req, res) => {
    const {errors, isValid} = validerInscription(req.body)

    if (!isValid){
      return res.status(404).json(errors)
    }

    User.findOne({login: req.body})
        .then(user => {
          if (User) {
            errors.login = 'Ce login est pris !'
          }
          const newUser = new User({
            login: req.body.login,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          })
          newUser.create(newUser.login, newUser.password, newUser.lastname, newUser.firstname)
            .then(newUser => res.json(newUser))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

    return res.send('OK!');
  })

module.exports = router
module.exports.User = User
