const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false //will probably have to change to false if we want to submit questions to be answered
    },
    tags:{
        type: String,
        required: true
    }, 
    answered: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

const faq = mongoose.model('faqs', faqSchema);
module.exports = faq;