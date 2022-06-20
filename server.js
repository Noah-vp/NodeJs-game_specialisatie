var playerindex = []
var express = require('express');

var app = express();
var server = app.listen(3000, '0.0.0.0');

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);


function newConnection(socket){
    var newpl = playerindex.push(socket.id)
    var id = playerindex.indexOf(socket.id) + 1
    users = {
        id: id
    };
    socket.on('update', ClientMsg)
    io.sockets.emit('playertag', users)
    
    function ClientMsg(data) {
        socket.broadcast.emit('update', data)
    }
}   



