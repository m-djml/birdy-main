const jwt = require("jsonwebtoken");
const UserModel = require("../models/user_model");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          res.cookie('accessToken', '', { maxAge: 1 });
          next();
        } else {
          let user = await UserModel.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
}

module.exports.first_auth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json('No token')
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log('No token');
  }
};