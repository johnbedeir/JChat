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

app.post("/chat", (req, res) => {
    res.sendFile(__dirname + "/chat.html");
});


// CHAT PAGE STYLE

app.get("/styles/bootstrap4-alpha3.min.css", function(req, res){
    res.sendFile(__dirname + "/styles/bootstrap4-alpha3.min.css");
});

app.get("/styles/responsive.css", function(req, res){
    res.sendFile(__dirname + "/styles/responsive.css");
});

app.get("/styles/style.css", function(req, res){
    res.sendFile(__dirname + "/styles/style.css");
});

app.get("/javascript/bootstrap4-alpha3.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/bootstrap4-alpha3.min.js");
});

app.get("/javascript/jquery.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/jquery.min.js");
});

app.get("/javascript/jquery.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/jquery.min.js");
});

app.get("/javascript/jquery.mCustomScrollbar.js", function(req, res){
    res.sendFile(__dirname + "/javascript/jquery.mCustomScrollbar.js");
});

app.get("/javascript/smoothscroll.js", function(req, res){
    res.sendFile(__dirname + "/javascript/smoothscroll.js");
});

app.get("/javascript/waypoints.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/waypoints.min.js");
});

app.get("/javascript/jquery-countTo.js", function(req, res){
    res.sendFile(__dirname + "/javascript/jquery-countTo.js");
});

app.get("/javascript/waves.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/waves.min.js");
});

app.get("/javascript/canvasjs.min.js", function(req, res){
    res.sendFile(__dirname + "/javascript/canvasjs.min.js");
});

app.get("/javascript/main.js", function(req, res){
    res.sendFile(__dirname + "/javascript/main.js");
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