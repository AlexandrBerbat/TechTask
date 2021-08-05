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
        default: "available"
    }
}, {timestamps: true})


generalSchema.statics.add = async function (data) {
    console.log(data);
    try{
        const bicycle = new model(data);
        bicycle.save();
        return "bicycle added succesfully";
        
    }catch(err){
        console.log(err);
        return err;
    }
    
    
};

generalSchema.statics.changeStatus = async function (id, newStatus) {

    const bicycle = await this.findOne({ _id: id });

    if (!bicycle) {
        return false;
    }else{
        bicycle.updateOne({status: newStatus})
        return true;
    }
}

generalSchema.statics.deleteBicycle = async function (id){
    const bicycle = await this.findOne({_id: id });
    if (!bicycle) {
        return false;
    }else{
        bicycle.deleteOne();
        return true;
    }
}


const modelname = path.basename(__filename, ".js");
const model = mongoose.model(modelname, generalSchema);
module.exports = model;