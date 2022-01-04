const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tailgateSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true //will probably have to change to false if we want to submit questions to be answered
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    watch_party: {
        type: Boolean,
        required: true
    },
}, {timestamps: true});

const tailgate = mongoose.model('tailgate', tailgateSchema);
module.exports = tailgate;