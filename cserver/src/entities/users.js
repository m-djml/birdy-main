const mongoose = require('mongoose')

class users {
  constructor(db) {
    this.db = db
  /*
    this.login = db.login
    this.password = db.password
    this.firstname = db.firstname
    this.lastname = db.lastname
    */
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
}

const UserSchema = new mongoose.Schema({
  login: String,
  password: String,
  firstName: String,
  lastName: String
});

UserSchema.loadClass(users)

console.log(UserSchema.methods); // { myMethod: [Function: myMethod] }
console.log(UserSchema.statics); // { myStatic: [Function: myStatic] }
console.log(UserSchema.virtuals); // { myVirtual: VirtualType { ... } }

module.exports = users = mongoose.model('User', UserSchema);
