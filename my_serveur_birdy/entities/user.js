const UserModel = require("../models/user_model");

module.exports.getAllUsers = async (req, res) => {
    try{
        const users = await UserModel.find().select("-password");
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({
            status: 500,
            message: "Erreur interne",
            details: (e || "Erreur inconnue").toString()
        })
    }
}

module.exports.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id).select("-password");
    if (!user){
        res.status(500).send(err.message);
        console.log("Id inconnu : " + err.message);
    }
    else{
        res.status(200).send(user);
    }
}


module.exports.updateUser = async (req, res) => {
    try {
        UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {bio: req.body.bio,},
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (err) return res.status(500).send({ message: err });
                else return res.status(200).send(docs);
            }


        )
    }catch(err){
        return res.status(500).json({ message: err.message });
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
