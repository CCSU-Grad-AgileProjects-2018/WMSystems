const express = require('express'),
      server = express(),
      users = require('./users'),
      fs = require('fs'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:admin1@ds121163.mlab.com:21163/agile-methods-1');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static('.'));

var User = require('./models/user');

// var testuser = new User({
//     name: 'Buster',
//     username: 'testuser',
//     password: 'testpassword' 
// });

// testuser.save(function(err) {
//     if (err) throw err;
//     console.log('User saved successfully!');
// });

//setting the port.
server.set('port', process.env.PORT || 8080);

var router = express.Router();

//Adding routes
server.get('/',(req,res)=>{
 res.sendFile(__dirname + '/login.html');
});

server.get('/users',(req,res)=>{
 res.json(users);
});

server.post('/signup', (req,res)=>{
    var username = req.body.username;
    var password = req.body.password1;

    var newUser = new User({
        username: username,
        password: password
    });
    newUser.save(function(err) {
        if (err) throw err;
        console.log(`${username} saved successfully!`);
    });
});

//Binding to localhost://3000
server.listen(8080,()=>{
 console.log('Express server started at port 8080');
});