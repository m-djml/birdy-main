const UserModel = require("../models/user_model.js");
const express = require('express');

const router = express.Router();

router.post("/register", );
router.post("/login", );
router.get("/logout", );

router.get("/", ); //obtenir tous les utilisateurs
router.get("/:id", ); //obtenir un utilisateur particulier
router.put("/:id", ); //modifier un utilisateur particulier
router.delete("/:id", ); //supprimer un utilisateur particulier

moduler.export = router;