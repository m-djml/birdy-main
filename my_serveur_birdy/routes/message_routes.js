const message = require("../entities/message");
const user = require("../entities/user");

const express = require('express');

const message_router = express.Router();

message_router.post("/homepage", message.createMessage); // poster un message
message_router.put("/:id", message.unlikeMessage); // enlever un j'aime
message_router.put("/:id", message.likeMessage); // mettre un j'aime
message_router.delete("/:id", message.deleteMessage); // supprimer un message particulier

module.exports = message_router;
