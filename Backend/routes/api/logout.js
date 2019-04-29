/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');

// url 'localhost:3000/api/logout/'
router.get('/', function(req ,res){
    req.logout();
    res.redirect('/');
});

module.exports = router ;