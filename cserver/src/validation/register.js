const Validator = require('validator');

module.exports = function (date) {
  let errors = {}

  if (Validator.isEmpty(data.login)){ errors.login = 'Entrez un login' }
  if (!Validator.isLength(data.login, {min:4, max:30})){ errors.login = 'Le login doit etre compris entre 4 et 20 caracteres' }
  if (Validator.isEmpty(data.password)){ errors.password = 'Entrez un mdp' }
  if (!Validator.isLength(data.password, {min:6, max:30})){ errors.password = 'Le mdp doit etre compris entre 6 et 20 caracteres' }
}
