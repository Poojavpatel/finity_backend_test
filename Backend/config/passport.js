const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/signup').User;
const config = require('./database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
    // Local strategy
    passport.use(new LocalStrategy(function(username, password, done){
        // Match username
        let query = {username:username};
        User.findOne(query, function(err, user){
            if (err) throw(err);
            if (!user) {
              return done(null, false, { message: 'Username not found.' });
            }
            // Match password
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }));
}