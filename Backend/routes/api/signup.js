/*jshint esversion: 8 */
const User = require('../../models/signup').User;
const validateUser = require('../../models/signup').validateUser;
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const path = require('path');

//POST requests signup a new user
// url 'localhost:5000/api/signup/'
router.post('/', async(req,res) => {
    console.log(req.body);
    const result = validateUser(req.body); 
    if(result.error){
       return res.status(400).send("some or many fields in your form failed validation");
    }
    const user = new User({
        username:req.body.username,
        password:req.body.password,
        fullname:req.body.fullname,
        email:req.body.email
	});
    const resultuser = await user.save();
    console.log('user', user);
    res.set({
		'Access-Control-Allow-Origin' : '*'
	});
    return res.sendFile(path.join(__dirname+'../../../public/app/visaletter.html'));
    // res.end();
});

module.exports = router ;