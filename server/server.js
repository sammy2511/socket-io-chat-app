const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'/../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user Connected');
  var now = new Date().toString();

  //emit new message to client
  // socket.emit('newMessageEvent',{
  //   from:'dude@example.com',
  //   text:'got your msg',
  //   createdAt: now
  // });

  //on Recieving new Message from client
  socket.on('createMessageEvent',(message) => {
    io.emit('newMessageEvent',{
      from:message.from,
      text:message.text,
      createdAt:new Date().getTime()
    });
    console.log('createMessageEvent',message);
  });

  socket.on('disconnect',() => {
    console.log('User disconnected');
  });
});


server.listen(port,() => {
  console.log(`server is up and running on ${port}`);
})
