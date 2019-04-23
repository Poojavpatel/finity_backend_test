/*jshint esversion: 6 */
const {Visaletter,validateVisaletter} = require('../models/visaletters');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');

//GET requests view all Visaletters
// url 'localhost:3000/api/visaletter/'
router.get('/',async (req ,res) => {
    const visaletters = await Visaletter.find().sort('name');
    console.log(visaletters);
    res.send(visaletters);
});

//POST requests add a new visaletter
// url 'localhost:3000/api/visaletter/'
router.post('/', async (req,res) => {
    const result = validateVisaletter(req.body); 
    if(result.error){
       return res.status(400).send("some or many fields in your form failed validation");
    }
    const visaletter = new Visaletter({
        name: req.body.name
        //
        ///
        //
        //
        //
        //
	});
    const resultvisaletter = await visaletter.save();
    console.log('visaletter', visaletter);
    res.send(visaletter);
});

module.exports = router ;