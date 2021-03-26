var express = require("express");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);

server.listen(3333, function(){
    console.log("The development server is running on port 3333.");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/styles/index.css", function(req, res){
    res.sendFile(__dirname + "/styles/index.css");
});

io.on("connection", function(socket){
    console.log("A user has connected!");

    socket.on("disconnect", function(){
        console.log("A user has disconnected")
    });
});