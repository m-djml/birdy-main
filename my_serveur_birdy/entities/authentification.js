const UserModel = require("../models/user_model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const maxAge = 24 * 60 * 60 * 1000; //age max d'un cookie (ici égale à un jour)

module.exports.createUser = async (req, res) => {
    let errors = { firstname:"", lastname:"", username:"", email:"", password:""};

    let {firstname, lastname, username, email, password } = req.body

    if(!firstname || !lastname || !username || !email || !password){
        if(!firstname){
            errors.firstname = "Vous devez remplir ce champs.";
        }
    
        if(!lastname){
            errors.lastname = "Vous devez remplir ce champs.";
        }
    
        if(!username){
            errors.username = "Vous devez remplir ce champs.";
        }
    
        if(!email){
            errors.email = "Vous devez remplir ce champs.";
        }
    
        if(!password){
            errors.password = "Vous devez remplir ce champs.";
        }

        return res.json({errors});
    }

    try{
        let user = await UserModel.findOne({ username : req.body.username });
        if(user){
            errors.username = "Utilisateur avec ce pseudo existe déja.";
            return res.json({errors});
        }

        user = await UserModel.findOne({ email : req.body.email});

        if(user){ 
            errors.email = "Utilisateur avec cet email existe déja.";
            return res.json({errors});
        }

        
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
    let error=''
    let errors = { username: "", email: ""};

    let { username,  password } = req.body

    if(!username || !password){
    
        if(!username){
            errors.username = "Vous devez remplir ce champs.";
        }
    
        if(!password){
            errors.password = "Vous devez remplir ce champs.";
        }

        return res.json({errors});
    }

    try{
        let user = await UserModel.findOne({ username : req.body.username });
        if(!user){
            error ="Utilisateur ou mot de passe invalide.";
            return res.json({erreur : error});
        }

        const valid_password = await bcrypt.compare(req.body.password, user.password);

        if(!valid_password){
            error ="Utilisateur ou mot de passe invalide.";
            return res.json({erreur : error});
        }
        
        const token = jwt.sign({ _id: user._id}, process.env.SECRET_KEY, { expiresIn: maxAge});
        res.cookie('accessToken', token, { httpOnly: true, maxAge});
        //res.status(200).json({ user: user._id, token : token});
        res.status(200).json({user: user._id });
        
    }catch(err){
        res.status(500).send(err.message);
        console.log(err.message);
    }
}

module.exports.logout = (req, res) => {
    res.cookie('accessToken', '', { maxAge: 1 });
    res.redirect('/');
}
