/*jshint esversion: 8 */
/* all code for defining and validaing a user to signup */
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{type:String},
    password:{type:String},
    fullname:{type:String},
    email:{type:String}
});
const User = mongoose.model( 'User' , userSchema);

//Validating a user
function validateUser(user){
    const schema ={
        username:Joi.string(),
        password:Joi.string(),
        fullname:Joi.string(),
        email:Joi.string().email()
    };
    return Joi.validate(user , schema);
}

module.exports.User=User;
module.exports.validateUser=validateUser;
module.exports.userSchema=userSchema;