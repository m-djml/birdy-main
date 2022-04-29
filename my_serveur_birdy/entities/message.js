const MessageModel = require("../models/message_model");
const UserModel = require("../models/user_model");

module.exports.createMessage = async (req, res) => {
    const newMsg = new MessageModel({
        author: req.body.author,
        message: req.body.message,
        likers: []
    })

    try{
        const msg = await newMsg.save();
        res.status(201).json(msg);
    }catch(err){
        res.status(400).send(err.message);
    }
}

module.exports.deleteMessage = (req, res) => {
    MessageModel.findByIdAndDelete(req.params.id, (err, docs) => {
        if(err){
            res.status(500).send(err.message);
            console.log("Delete error : " + err.message);
        }
        else{
            res.status(200).send(docs);
        }
    })
}

module.exports.likeMessage = async (req, res) => {
    try{
        await MessageModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: {likers : req.body.id} },
            { new : true },
            (err, docs) => {
                if(err){
                    res.status(500).send(err.message);
                    console.log("Like Message error : " + err.message);
                }
                else{
                    res.status(200).send(docs);
                }
            }
        );

        await UserModel.findByIdAndUpdate(
            req.body.id,
            { $addToSet: { likes: req.params.id } },
            { new : true },
            (err, docs) => {
                if(err){
                    res.status(500).send(err.message);
                    console.log("Like Message error : " + err.message);
                }
                else{
                    res.status(200).send(docs);
                }
            }
        );
    }catch(err){
        res.status(500).send(err.message);
        console.log("Like Message error : " + err.message);
    }
}

module.exports.unlikeMessage = async (req, res) => {
    try{
        await MessageModel.findByIdAndUpdate(
            req.params.id,
            { $pull: {likers : req.body.id} },
            { new : true },
            (err, docs) => {
                if(err){
                    res.status(500).send(err.message);
                    console.log("Like Message error : " + err.message);
                }
                else{
                    res.status(200).send(docs);
                }
            }
        );

        await UserModel.findByIdAndUpdate(
            req.body.id,
            { $pull: { likes: req.params.id } },
            { new : true },
            (err, docs) => {
                if(err){
                    res.status(500).send(err.message);
                    console.log("Like Message error : " + err.message);
                }
                else{
                    res.status(200).send(docs);
                }
            }
        );
    }catch(err){
        res.status(500).send(err.message);
        console.log("Like Message error : " + err.message);
    }

    module.exports.getMessagesFromUser = async (req, res) => {
      try{
          const messages = await MessageModel.find().select("-author");
          res.status(200).json(messages);
      }catch(err){
          res.status(500).json({
              status: 500,
              message: "Erreur interne",
              details: (e || "Erreur inconnue").toString()
          })
      }
    }

}
