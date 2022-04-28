const Validator = require('validator');
const isEmpty = value => {
    value === undefined ||
    value === null ||
    (typeof value === "Object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)

}

module.exports = function (data) {
  let errors = {}

  if (Validator.isEmpty(data.login)){ errors.login = "Entrez un login" }
  if (!Validator.isLength(data.login, {min:4, max:30})){ errors.login = "Le login doit etre compris entre 4 et 20 caracteres" }
  if (Validator.isEmpty(data.password)){ errors.password = "Entrez un mdp" }
  if (!Validator.isLength(data.password, {min:6, max:30})){ errors.password = "Le mdp doit etre compris entre 6 et 20 caracteres" }
  if (Validator.isEmpty(data.password2)){ errors.password2 = "Confirmez le mdp" }
  if (!Validator.equals(data.password2)){ errors.password2 = "Les mdp ne correspondent pas !" }

  return {
    errors, isValid: Object.keys(errors).length === 0
  }
}
