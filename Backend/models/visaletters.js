/*jshint esversion: 6 */
/* all code for defining and validaing a visaletter */
const Joi = require('joi');
const mongoose = require('mongoose');

const visaletterSchema = mongoose.Schema({
    name:{ type:String,required:true, minlength:3, maxlength:50}
});
const visaletter = mongoose.model( 'visaletter' , visaletterSchema);

//Validating a visaletter
// moved to ./models/visaletters.js
function validatevisaletter(visaletter){
    const schema ={
        name : Joi.string().min(3).required(),
        movie : Joi.string().min(3)
    };
    return Joi.validate(visaletter , schema);
}

module.exports.visaletter=visaletter;
module.exports.validatevisaletter=validatevisaletter;
module.exports.visaletterSchema=visaletterSchema;