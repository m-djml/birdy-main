const user = require("../entities/user");
const message = require("../entities/message");
const auth = require("../entities/authentification");

const express = require('express');

const user_router = express.Router();

user_router.post("/register", auth.createUser);
user_router.post("/login", auth.signin);
user_router.get("/logout", auth.logout);

user_router.get("/", user.getAllUsers); //obtenir tous les utilisateurs
user_router.get("/:id", user.getUser); //obtenir un utilisateur particulier
user_router.put("/:id", user.updateUser); //modifier un utilisateur particulier
user_router.delete("/:id", user.deleteUser); //supprimer un utilisateur particulier

module.exports = user_router;
