const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        firstname: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 50
        },
        lastname: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 50
        },
        username: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 50,
          lowercase: true,
          unique: true,
          trim: true
        },
        email: {
          type: String,
          required: true,
          validate: [isEmail],
          lowercase: true,
          unique: true,
          trim: true,
        },
        password: {
          type: String,
          required: true,
          minlength: 6,
          maxlength: 1024
        },
        bio: {
          type: String,
          maxlength: 1024
        },
        followers: {
          type: [String]
        },
        following: {
          type: [String]
        },
        likes: {
          type: [String]
        }
    }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;