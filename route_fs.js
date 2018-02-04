var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send("<b>You are in /</b>");
});

app.get('/first',function(req,res){
res.send(  __dirname + "/" + "first.html");
});

app.get('/second',function(req,res){
res.send(  __dirname + "/" + "second.html");
});

console.log("Web server started at 3000");
app.listen(3000);