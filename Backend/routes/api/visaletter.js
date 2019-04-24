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
    const visaletters = await Visaletter.find().sort('_id');
    console.log(visaletters);
    // res.send(visaletters);
    res.render(__dirname+'/../../public/app/letters.html',{visalettersdic:visaletters});
});

//POST requests add a new visaletter
// url 'localhost:3000/api/visaletter/'
router.post('/', async (req,res) => {
    console.log(req.body);
    // const result = validateVisaletter(req.body); 
    // if(result.error){
    //    return res.status(400).send("some or many fields in your form failed validation");
    // }
    const visaletter = new Visaletter({
        multiplicity:req.body.mv,
        purpose:req.body.pov,
        hotels:req.body.hotels,
        entrydate:req.body.entrydate,
        exitdate:req.body.exitdate,
        fname:req.body.firstname,
        lname:req.body.lastname,
        passportno:req.body.passno,
        dob:req.body.dob,
        // placesofvisit:req.body.placesofvisit,
        // organization:req.body.organization,
        // noofpassengers:req.body.noofpassengers,
        // paymentstatus:req.body.paymentstatus,
        // amount:req.body.amount,
        // country:req.body.country,
	});
    const resultvisaletter = await visaletter.save();
    console.log('visaletter', visaletter);
    res.set({
		'Access-Control-Allow-Origin' : '*'
    });
    const visaletters = await Visaletter.find().sort('_id');
    // return res.sendFile(path.join(__dirname+'../../../public/app/letters.html'));
    return res.render('letters.html',{visalettersdic:visaletters});
});

module.exports = router ;