const MessageModel = require("../models/message_model");
const UserModel = require("../models/user_model");

module.exports.getAllMessages = async (req, res) => {
    try{
        const msg = await MessageModel.find();
        res.status(200).json(msg);
    }catch(err){
        res.status(500).json({
            status: 500,
            message: "Erreur interne",
            details: (e || "Erreur inconnue").toString()
        })
    }
}

module.exports.getMessagesOneUser = async (req, res) => {
    const msg = await MessageModel.find();
    if (!msg){
        res.status(500).send(err.message);
        console.log("Id inconnu : " + err.message);
    }
    else{
        user_msg = [];
        for(let i=0; i<msg.length; i++){
            if(msg[i].author_id === req.params.id){
                user_msg.push(msg[i]);
            }
        }
        res.status(200).json(user_msg);
    }
}

module.exports.createMessage = async (req, res) => {
    const {author_id, author, message } = req.body;
    
    try{
        const msg = await MessageModel.create({ author_id, author, message });
        res.status(201).json(msg);
    }catch(err){
        res.status(400).send(err.message);
    }
}

module.exports.deleteMessage = (req, res) => {
    MessageModel.findByIdAndDelete(req.params.id, (err, docs) => {
        if(err){
            res.status(500).send(err.message);
            console.log("Erreur lorsque vous essayez de supprimer le message : " + err.message);
        }
        else{
            res.status(200).send(docs);
        }
    })
}

module.exports.likeMessage = async (req, res) => {
    let msg = ""
    try{
        msg = await MessageModel.findByIdAndUpdate(
            req.params.id, 
            { $addToSet: {likers : req.body.id} },
            { new : true, upsert:true });

    }catch(err){
        return res.status(500).json({ message: err });
    }

    try{
        await UserModel.findByIdAndUpdate( 
            req.body.id,
            { $addToSet: { likes: req.params.id } },
            { new : true, upsert:true });

    }catch(err){
        res.status(500).send(err.message);
    }

    res.status(200).json({message: msg});

}

module.exports.unlikeMessage = async (req, res) => {
    let msg = ""
    try{
        msg = await MessageModel.findByIdAndUpdate(
            req.params.id, 
            { $pull: {likers : req.body.id} },
            { new : true, upsert:true});

    }catch(err){
        res.status(500).send(err.message);
    }

    try{
        await UserModel.findByIdAndUpdate( 
            req.body.id,
            { $pull: { likes: req.params.id } },
            { new : true, upsert:true });

    }catch(err){
        res.status(500).send(err.message);
    }

    res.status(200).json({message: msg});

}