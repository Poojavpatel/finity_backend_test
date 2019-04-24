/*jshint esversion: 8 */
/* all code for defining and validaing a visaletter */
const Joi = require('joi');
const mongoose = require('mongoose');

const visaletterSchema = mongoose.Schema({
    // name:{ type:String,required:true, minlength:3, maxlength:50}
    multiplicity:{type:String},
    country:{type:String},
    purpose:{type:String},
    entrydate:{type:String},
    exitdate:{type:String},
    placesofvisit:{type:Array},
    hotels:{type:String},
    organization:{type:Number},
    noofpassengers:{type:Number},
    paymentstatus:{type:String},
    amount:{type:Number},
    fname:{type:String},
    lname:{type:String},
    passportno:{type:String},
    dob: {type:String}
});
const Visaletter = mongoose.model( 'Visaletter' , visaletterSchema);

//Validating a visaletter
function validateVisaletter(visaletter){
    const schema ={
        multiplicity:Joi.string(),
        placesofvisit:[Joi.string(), Joi.number()],
        entrydate:Joi.string(),
        exitdate:Joi.string(),
        hotels:Joi.string(),
        fname:Joi.string(),
        lname:Joi.string(),
        passportno:Joi.string(),
        dob: Joi.string(),
        country:Joi.string(),
        purpose:Joi.string(),
        organization:Joi.number().max(5),
        noofpassengers:Joi.number().max(5),
        paymentstatus:Joi.string(),
        amount:Joi.number()
    };
    return Joi.validate(visaletter,schema);
}

module.exports.Visaletter=Visaletter;
module.exports.validateVisaletter=validateVisaletter;
module.exports.visaletterSchema=visaletterSchema;