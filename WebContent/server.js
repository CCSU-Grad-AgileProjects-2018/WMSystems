const express = require('express'),
      server = express(),
      users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 8080);

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile(__dirname + '/first.html');
});

server.get('/users',(request,response)=>{
 response.json(users);
});

//Binding to localhost://3000
server.listen(8080,()=>{
 console.log('Express server started at port 8080');
});