/*jshint esversion: 8 */
const Visaletter = require('../../models/visaletters').Visaletter;
const validateVisaletter = require('../../models/visaletters').validateVisaletter;
const express = require('express');
const path = require('path');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');

//GET requests view all Visaletters
// url 'localhost:3000/api/visaletter/'
router.get('/', async(req ,res) => {
    const visaletters = await Visaletter.find().sort('fname');
    console.log(req.body);
    console.log(visaletters);
    res.send(visaletters);
});

//POST requests add a new visaletter
// url 'localhost:3000/api/visaletter/'
router.post('/', async (req,res) => {
    console.log(req.body);
    const result = validateVisaletter(req.body); 
    if(result.error){
       return res.status(400).send("some or many fields in your form failed validation");
    }
    // const visaletter = new Visaletter({
    //     multiplicity:req.body.mv,
    //     country:req.body.country,
    //     purpose:req.body.pov,
    //     entrydate:req.body.entrydate,
    //     exitdate:req.body.exitdate,
    //     placesofvisit:req.body.placesofvisit,
    //     hotels:req.body.hotels,
    //     organization:req.body.organization,
    //     noofpassengers:req.body.noofpassengers,
    //     paymentstatus:req.body.paymentstatus,
    //     amount:req.body.amount,
    //     fname:req.body.firstname,
    //     lname:req.body.lastname,
    //     passportno:req.body.passno,
    //     dob:req.body.dob
	// });
    // const resultvisaletter = await visaletter.save();
    // console.log('visaletter', visaletter);
    res.set({
		'Access-Control-Allow-Origin' : '*'
    });
    // return res.sendFile(path.join(__dirname+'../../../public/app/letters.html'));
    return res.send("hello");
});

module.exports = router ;