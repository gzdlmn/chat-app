var express = require("express");
var app = express();
var http = require("http").createServer(app);

var io = require("socket.io")(http);
var users = [];
var messages = [];
app.get("/", (req, res) => {
    //res.send("<h1>Chat System</h1>");
    res.sendFile(__dirname+"/index.html");
});

// let me know when someone connects
io.on("connection", (socket) => {
    // console.log("someone is connected")
    socket.on("newUser", (userName) => {
        console.log(userName);
        users.push({
            id: socket.id,
            name: userName
        });
        io.emit("users", users);
    });
    socket.on("sendMessageClient", (info)=>{      // server will receive message from client
        console.log(info);
        messages.push(info);
        console.log(messages);
        io.emit("messagesServer", messages);
    })
});

http.listen(3000, () => {console.log("Server is running")});