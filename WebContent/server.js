const express = require('express'),
      server = express(),
      users = require('./users'),
      fs = require('fs'),
      bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//setting the port.
server.set('port', process.env.PORT || 8080);

var router = express.Router();

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile(__dirname + '/first.html');
});

server.get('/users',(request,response)=>{
 response.json(users);
});

server.post('/users', (request,response)=>{
    var username = request.body.username;
    var password = request.body.password;

    fs.appendFile('users.js', username, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    response.json("good job");
})

//Binding to localhost://3000
server.listen(8080,()=>{
 console.log('Express server started at port 8080');
});