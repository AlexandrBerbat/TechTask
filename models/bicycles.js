const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    type: {
        type: String,
        required: true,
        minlength: 5
    },
    color: {
        type: String,
        required: true,
        minlength: 5  //? "red" ?
    },
    wheelSize: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    status: {
        type: String,
        required: true,
        minlength: 5
    }
}, {timestamps: true})

const modelname = path.basename(__filename, ".js");
const model = mongoose.model(modelname, generalSchema);
module.exports = model;