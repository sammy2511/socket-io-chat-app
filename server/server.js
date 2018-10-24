const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'/../public');
const {generateMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user Connected');


  //emit new message to client
  // socket.emit('newMessageEvent',{
  //   from:'dude@example.com',
  //   text:'got your msg',
  //   createdAt: now
  // });

  //on new User Joined the server
  socket.emit('newMessageEvent',generateMessage('Admin','Welcome To chat app'));

  //broadcast to other user that new user joined the server
  socket.broadcast.emit('newMessageEvent',generateMessage('Admin','new User Joined'));

  //on Recieving new Message from client
  socket.on('createMessageEvent',(message,callback) => {
    io.emit('newMessageEvent',generateMessage(message.from,message.text));
    callback('Recieved message');
  });

  socket.on('disconnect',() => {
    console.log('User disconnected');
  });
});


server.listen(port,() => {
  console.log(`server is up and running on ${port}`);
})
