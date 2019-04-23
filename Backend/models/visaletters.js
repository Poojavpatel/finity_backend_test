/*jshint esversion: 8 */
/* all code for defining and validaing a visaletter */
const Joi = require('joi');
const mongoose = require('mongoose');

const visaletterSchema = mongoose.Schema({
    // name:{ type:String,required:true, minlength:3, maxlength:50}
    multiplicity:{type:String},
    country:{type:String},
    purpose:{type:String},
    entrydate:{type:Date},
    exitdate:{type:Date},
    placesofvisit:{type:Array},
    hotels:{type:String},
    organization:{type:Number},
    noofpassengers:{type:Number},
    paymentstatus:{type:String},
    amount:{type:Number},
    fname:{type:String},
    lname:{type:String},
    passportno:{type:String}
    dob: {type:String}
});
const Visaletter = mongoose.model( 'Visaletter' , visaletterSchema);

//Validating a visaletter
function validateVisaletter(visaletter){
    const schema ={
        multiplicity:Joi.string(),
        country:Joi.string(),
        purpose:Joi.string(),
        entrydate:Joi.number().integer(),
        exitdate:Joi.number().integer(),
        placesofvisit:[Joi.string(), Joi.number()],
        hotels:Joi.string(),
        organization:Joi.number().max(5),
        noofpassengers:Joi.number().max(5),
        paymentstatus:Joi.string(),
        amount:Joi.number(),
        fname:Joi.string(),
        lname:Joi.string(),
        passportno:Joi.string(),
        dob: Joi.string()
    };
    return Joi.validate(visaletter , schema);
}

module.exports.Visaletter=Visaletter;
module.exports.validateVisaletter=validateVisaletter;
module.exports.visaletterSchema=visaletterSchema;