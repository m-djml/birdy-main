const UserModel = require("../models/user_model");

module.exports.getAllUsers = async (req, res) => {
    try{
        const users = await UserModel.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({
            status: 500,
            message: "Erreur interne",
            details: (e || "Erreur inconnue").toString()
        })
    }
}

module.exports.getUser = (req, res) => {
    UserModel.findById(req.params.id, (err, docs) => {
        if (err){
            res.status(500).send(err.message);
            console.log("Id inconnu : " + err.message);
        }
        else{
            res.status(200).send(docs);
        }
    })
}

module.exports.updateUser = async (req, res) => {
    try {
        const upd_user = await UserModel.findOneAndUpdate(
            {_id: req.params.id}, {
                
            }
            
        )
    }catch(err){

    }

}

module.exports.deleteUser = async (req, res) => {
    try{
        await UserModel.deleteOne({ _id: req.params.id});
        res.status(200).send({message : "Compte supprimé avec succés"});
    }catch(err){
        res.status(500).send({message : err.message});
    }

}

