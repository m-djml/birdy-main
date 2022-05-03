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
          let user = await UserModel.findById(decodedToken._id);
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
  const token = req.cookies.accessToken;
  // console.log(token);
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(200).json('No token')
      } else {
        console.log(decodedToken._id);
        //res.status(200).json(decodedToken._id);
        next();
      }
    });
  } else {
    console.log('No token');
  }
};