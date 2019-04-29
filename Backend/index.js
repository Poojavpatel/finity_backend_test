/*jshint esversion: 8 */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/database');
const passport = require('passport');
require('./config/passport')(passport); // Passport config (for login)

// Middlewares
app.use(express.json());
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded());
app.set('views', __dirname + '/public/app');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(passport.initialize());
app.use(passport.session());

// connecting to mongodb
mongoose.connect(config.mongouri)
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.log('Error while connecting to MongoDB', err));

// Homepage route
app.get('/',(req,res) => {
    res.set({ 'Access-Control-Allow-Origin' : '*' });
    // return res.redirect('/public/app/signup-simple.html');
    res.sendFile(path.join(__dirname+'/public/app/signup-simple.html'));
});


// use routes
const visaletter = require('./routes/api/visaletter.js');
app.use('/api/visaletter' , visaletter);

const letters = require('./routes/api/letters.js');
app.use('/api/letters' , letters);

const signup = require('./routes/api/signup.js');
app.use('/api/signup' , signup);

const login = require('./routes/api/login.js');
app.use('/api/login' , login);

const logout = require('./routes/api/logout.js');
app.use('/api/logout' , logout);

// setting up server
port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started at port ${port}`));