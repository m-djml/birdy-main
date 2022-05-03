const MessageModel = require("../models/message_model");
const message = require("../entities/message");

const express = require('express');

const router = express.Router();

router.get('/', message.getAllMessages);
/*
router.post('/message', async (req, res) => {
 try {
  const msg = await MessageModel.createMessage(Object.assign({ message: req.message }, req.body));
  res.json(msg);
 } catch (err) {
  logger.error(err);
  res.json({ error: err.message || err.toString() });
 }
});
*/
router.delete('/:id', message.deleteMessage);
router.patch('/like/:id', message.likeMessage);
router.patch('/unlike/:id', message.unlikeMessage);

module.exports = router;
