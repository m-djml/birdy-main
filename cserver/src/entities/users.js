
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
}
)
/*
const userSchema = new Schema({
  login: {
    type: {type: String},
    options: {
      required: true,
      unique: true
    }
  },
  password: {
    type: {type: String},
    options: {required: true}
  },
  firstname: {
    type: String,
    options: {required: true}
  },
  lastname: {
    type: String,
    options: {required: true}
  }
})
*/

class Users {
  constructor(db) {
    this.db = db
    // suite plus tard avec la BD
  }

  create(login, password, lastname, firstname) {
    return new Promise((resolve, reject) => {
      let userid = 1; // À remplacer par une requête bd
      if(false) {
        //erreur
        reject();
      } else {
        resolve(userid);
      }
    });
  }

  get(login) {
    return new Promise((resolve, reject) => {
      const user = fetch(login) // À remplacer par une requête bd

      if(false) {
        //erreur
        reject();
      } else {
        if(userid == 1) {
          resolve(user);
        } else {
          resolve(null);
        }
      }
    });
  }
/*
  async exists(login) {
    return new Promise((resolve, reject) => {
      if(false) {
        //erreur
        reject();
      } else {
        resolve(true);
      }
    });
  }

  checkpassword(login, password) {
    return new Promise((resolve, reject) => {
      let userid = 1; // À remplacer par une requête bd
      if(false) {
        //erreur
        reject();
      } else {
        resolve(userid);
      }
    });
  }
*/
}

module.exports = mongoose.model('User', userSchema)
