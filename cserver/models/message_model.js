const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true,
            trime: true,
            maxlength: 500,
        },
        likers: {
            type: [String],
            required: true
        }
    }
);

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;