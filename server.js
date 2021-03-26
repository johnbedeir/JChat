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

app.get("/css/iofrm-theme12.css", function(req, res){
    res.sendFile(__dirname + "/css/iofrm-theme12.css");
});

app.get("/css/iofrm-style.css", function(req, res){
    res.sendFile(__dirname + "/css/iofrm-style.css");
});

app.get("/css/fontawesome-all.min.css", function(req, res){
    res.sendFile(__dirname + "/css/fontawesome-all.min.css");
});

app.get("/css/bootstrap.min.css", function(req, res){
    res.sendFile(__dirname + "/css/bootstrap.min.css");
});

app.get("/images/Final.svg", function(req, res){
    res.sendFile(__dirname + "/images/Final.svg");
});

io.on("connection", function(socket){
    console.log("A user has connected!");

    socket.on("disconnect", function(){
        console.log("A user has disconnected")
    });
});