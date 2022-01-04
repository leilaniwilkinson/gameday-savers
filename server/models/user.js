const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true //will probably have to change to false if we want to submit questions to be answered
    },
    authorized: {
        type: Boolean,
        required: true
    },
}, {timestamps: true});

const user = mongoose.model('user', userSchema);
module.exports = user;