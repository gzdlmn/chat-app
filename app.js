var express = require("express");
var app = express();
var http = require("http").createServer(app);

app.get("/", (req, res) => {
    //res.send("<h1>Chat System</h1>");
    res.sendFile(__dirname+"/index.html");
});
http.listen(3000, () => {console.log("Server is running")});