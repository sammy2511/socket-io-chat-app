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

  var li = jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);

  jQuery('#list').append(li);

});

// socket.emit('createMessageEvent',{
//   from:'samar',
//   text:'hi'
// },function(data){
//   console.log('Response :',data);
// });

jQuery(document).ready(function(){
  jQuery('.form-message').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessageEvent',{
      from:'User',
      text: jQuery("#message").val()
    },function(data){
      console.log('Response :',data);
    });

  });
});
