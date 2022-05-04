const UserModel = require("../models/user_model.js");
const user = require("../entities/user");
const message = require("../entities/message");
const auth = require("../entities/authentification");

const express = require('express');

const router = express.Router();

router.post("/register", auth.createUser);
router.post("/login", auth.signin);
router.get("/logout", auth.logout);

router.get("/", user.getAllUsers); //obtenir tous les utilisateurs
router.get("/:id", user.getUser); //obtenir un utilisateur particulier
router.put("/:id", user.updateUser); //modifier un utilisateur particulier
router.delete("/:id", user.deleteUser); //supprimer un utilisateur particulier
router.patch("/follow/:id", user.follow);
router.patch("/unfollow/:id", user.unfollow);

module.exports = router;