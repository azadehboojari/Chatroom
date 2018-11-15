// make connections

var socket= io.connect('http://localhost:1337')

// query dom
var output=document.getElementById('output'),
    message=document.getElementById('message'),
    user=document.getElementById('user'),
    submit=document.getElementById('submit'),
    feedback=document.getElementById('feedback');

// emit
submit.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        user:user.value
    });
});
message.addEventListener('keypress', function(){
    socket.emit('typing', user.value);
});

// listen
socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML+='<p><strong>'+ data.user +':</strong>'+ data.message + '</p>'
});
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+ data + ' is typing...'+ '</em></p>';
})

