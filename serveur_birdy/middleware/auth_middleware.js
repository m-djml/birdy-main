const jwt = require("jsonwebtoken");
const UserModel = require("../models/user_model");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.session;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          res.cookie('session', '', { maxAge: 1 });
          next();
        } else {
          let user = await UserModel.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      console.log('No token');
      next();
    }
}