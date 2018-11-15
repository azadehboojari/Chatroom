var express =require('express');
var socket=require('socket.io')
var app= express();
var server = app.listen(1337, function(){
    console.log("listening to the port 1337 azadeh");
});

app.use (express.static('public'));

var io=socket(server);

io.on ('connection', function(socket){
    console.log("azadeh", socket.id);
    
    socket.on('chat', function(data){
        io.sockets.emit('chat',data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
    // socket.on('chat', function(data){
    //     socket.broadcast('typing',data);
    // });

});