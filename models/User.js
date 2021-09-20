const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    emails: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: ""

    },
}, { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema )