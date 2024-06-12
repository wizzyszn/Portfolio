const mongoose = require('mongoose');
const  {Schema} = mongoose

const portfolioSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    skills : {
        type : Array
    },
    description : {
        type : String
    },
    role : {
        type : String
    },
    imagesDir : {
        type : String,
        required : true
    },
    rating : {
        type : Number
    },
    link : {
        type : String,
        required : true
    },

});

module.exports = mongoose.model('Portfolio', portfolioSchema)