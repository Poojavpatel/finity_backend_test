/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');

//GET requests show login page
// url 'localhost:3000/api/login/'
router.get('/', async(req ,res) => {
    res.render(__dirname+'/../../public/app/signin-simple.html');
});

// POST request - login a user
// url 'localhost:3000/api/login/'
router.post('/', function(req,res,next){
    passport.authenticate('local',{
        successRedirect: '/api/visaletter',
        failureRedirect: '/api/signup/',
        session: false,
        failureFlash: true
    })(req, res, next);
});

module.exports = router ;