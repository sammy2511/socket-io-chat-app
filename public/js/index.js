var socket = io();

socket.on('connect',function ()  {
  console.log('Connected to server');

  // socket.emit('createMessageEvent',{
  //   to:'sammy@example.com',
  //   text:'hi! how are you'
  // });
});

socket.on('disconnect',function ()  {
  console.log('Disconnected from server');
});

socket.on('newMessageEvent',function(message){
  console.log('newMessageEvent',message);
});
