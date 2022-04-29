const router = require('express').Router()
const users = require("../entities/users.js");
const validerInscription = require('../validation/register')


router.route('/test')
router.post("/test", async (req, res) => {
    try {
        const { login, password } = req.body;
        // Erreur sur la requête HTTP
        if (!login || !password) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : login et password nécessaires"
            });
            return;
        }
        if(! await users.exists(login)) {
            res.status(401).json({
                status: 401,
                message: "Utilisateur inconnu"
            });
            return;
        }
        let userid = await users.checkpassword(login, password);
        if (userid) {
            // Avec middleware express-session
            req.session.regenerate(function (err) {
                if (err) {
                    res.status(500).json({
                        status: 500,
                        message: "Erreur interne"
                    });
                }
                else {
                    // C'est bon, nouvelle session créée
                    req.session.userid = userid;
                    res.status(200).json({
                        status: 200,
                        message: "Login et mot de passe accepté"
                    });
                }
            });
            return;
        }
        // Faux login : destruction de la session et erreur
        req.session.destroy((err) => { });
        res.status(403).json({
            status: 403,
            message: "login et/ou le mot de passe invalide(s)"
        });
        return;
    }
    catch (e) {
        // Toute autre erreur
        res.status(500).json({
            status: 500,
            message: "erreur interne",
            details: (e || "Erreur inconnue").toString()
        });
    }
});

router
    .route("/user/:user_id(\\d+)")
    .get(async (req, res) => {
    try {
        const user = await users.get(req.params.user_id);
        if (!user)
            res.sendStatus(404);
        else
            res.send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
})
    .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));




module.exports = router;
