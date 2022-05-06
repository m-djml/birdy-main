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

module.exports.follow = async (req, res) => {
    let user=""
    try {
      // add to the follower list
        user = await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow } },
            { new: true, upsert: true });

        //console.log(user);
        

    }catch(err){
        return res.status(500).json({ message: err });
    }

    try{
      // add to following list
    await UserModel.findByIdAndUpdate(
        req.body.idToFollow,
        { $addToSet: { followers: req.params.id } },
        { new: true, upsert: true });

        //console.log(user);
    
    } catch (err) {
      return res.status(500).json({ message: err });
    }

    res.status(200).json({user});
};


// module.exports.follow = async (req, res) => {
//     try {
//       // add to the follower list
//     UserModel.findOneAndUpdate(
//         {_id : req.params.id},
//         { $setOnInsert: { following: req.body.idToFollow } },
//         { new: true, upsert: true},
//         (err,docs) => {
//             if(err){
//                 console.log("erreur follow");
//             }
//         });

//         //console.log(user);
       

//         //   .then((data) => console.log(data))
//         //   .catch((err) => res.status(500).send({ message: err }));
  
//         // add to following list
//     UserModel.findOneAndUpdate(
//           {_id : req.body.idToFollow},
//           { $setOnInsert: { followers: req.params.id } },
//           { new: true, upsert: true },
//           (err,docs) => {
//             if(err){
//                 console.log("erreur follow");
//             }
//         });

//          // console.log(user);

//             // .then((data) => console.log(data))
//             // .catch((err) => res.status(500).send({ message: err }));
//         return res.status(200);
//     } catch (err) {
//       return res.status(500).json({ message: err });
//     }
// };
  
module.exports.unfollow = async (req, res) => {
    let user=""
    try {
      user = await UserModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { "following": req.body.idToUnfollow } },
        { new: true });

  
      }catch(err){
        return res.status(500).json({ message: err });
      }

    try{
        // Retirer de la liste des followers
        await UserModel.findByIdAndUpdate(
          req.body.idToUnfollow,
          { $pull: { "followers": req.params.id } },
          { new: true});
    } catch (err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json({user});
}