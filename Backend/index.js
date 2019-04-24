/*jshint esversion: 8 */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded());

// connecting to mongodb
const mongouri = 'mongodb://pooja1:q32AhKFb7CDg7R5@ds145486.mlab.com:45486/finity_backend_test';
mongoose.connect(mongouri)
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

const signup = require('./routes/api/signup.js');
app.use('/api/signup' , signup);

port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started at port ${port}`));