const UserModel = require("../models/user_model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const maxAge = 24 * 60 * 60 * 1000; //age max d'un cookie (ici égale à un jour)

module.exports.createUser = async (req, res) => {

    try{
        let user = await UserModel.findOne({ username : req.body.username });
        if(user){
            return res.status(400).send("Utilisateur avec ce pseudo existe déja.");
        }

        user = await UserModel.findOne({ email : req.body.email});

        if(user){
            return res.status(400).send("Utilisateur avec cet email existe déja.");
        }

        let {firstname, lastname, username, email, password } = req.body
        
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);

        user = await UserModel.create({
            firstname, lastname, username, email, password
        })

        res.status(201).send("Utilisateur crée!");

    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
}

module.exports.signin = async (req, res) => {

    try{
        let user = await UserModel.findOne({ username : req.body.username });
        if(!user){
            return res.status(400).send("Utilisateur ou mot de passe invalide.");
        }

        const valid_password = await bcrypt.compare(req.body.password, user.password);

        if(!valid_password){
            return res.status(400).send("Utilisateur ou mot de passe invalide.");
        }

        const token = jwt.sign({ _id: user._id}, process.env.SECRET_KEY, { expires: maxAge});
        res.cookie('session', token, { httpOnly: true, maxAge});
        res.status(200).json({ user: user._id});
        
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
}

module.exports.logout = (req, res) => {
    res.cookie('session', '', { maxAge: 1 });
    res.redirect('/');
}
