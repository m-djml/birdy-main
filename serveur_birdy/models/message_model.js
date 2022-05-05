const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        author_id:{
            type: String,
            required: true    
        },
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
    },
    {
        timestamps : true
    }
);

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;