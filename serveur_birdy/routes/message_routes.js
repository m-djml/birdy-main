const MessageModel = require("../models/message_model");
const message = require("../entities/message");

const express = require('express');

const router = express.Router();

router.get('/', message.getAllMessages);
//router.post('/',);
router.delete('/:id', message.deleteMessage);
router.patch('/like/:id', message.likeMessage);
router.patch('/unlike/:id', message.unlikeMessage);

module.exports = router;
