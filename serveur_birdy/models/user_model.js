const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 55,
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
        fistname: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 55
        },
        lastname: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 55
        },
        password: {
          type: String,
          required: true,
          max: 1024,
          minlength: 6
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

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;