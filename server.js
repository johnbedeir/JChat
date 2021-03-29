var express = require("express");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);
var users = [];

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

// Javascript

app.get("/js/bootstrap.min.js", function(req, res){
    res.sendFile(__dirname + "/js/bootstrap.min.js");
});

app.get("/js/cleave.min.js", function(req, res){
    res.sendFile(__dirname + "/js/cleave.min.js");
});

app.get("/js/jquery.min.css", function(req, res){
    res.sendFile(__dirname + "/js/jquery.min.css");
});

app.get("/js/main.js", function(req, res){
    res.sendFile(__dirname + "/js/main.js");
});

app.get("/js/popper.min.js", function(req, res){
    res.sendFile(__dirname + "/js/popper.min.js");
});







io.on("connection", function(socket){
    var name = "";

    socket.on("has connected", function(username) {
        name = username;
        users.push(username);
        io.emit("has connected", {username: username, usersList: users});
    });

    socket.on("disconnect", function(){
       users.splice(users.indexOf(name), 1);
       io.emit("has disconnected", {username: name, usersList: users});
    });

    socket.on("new message", function(data) {
        io.emit("new message", data);
    });

});