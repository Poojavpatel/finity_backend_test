/*jshint esversion: 8 */
const Visaletter = require('../../models/visaletters').Visaletter;
const express = require('express');
const path = require('path');
const router = express.Router();

//GET requests view all Visaletters
// url 'localhost:3000/api/letters/'
router.get('/', async(req ,res) => {
    const visaletters = await Visaletter.find().sort('_id');
    console.log(visaletters);
    res.render(__dirname+'/../../public/app/letters.html',{visalettersdic:visaletters});
});

module.exports = router ;