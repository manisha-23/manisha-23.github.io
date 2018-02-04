var express = require('express');


var app=express();
app.get('/',function(req,res){
res.send("Hello world");
});

console.log("Web server is running at the port 3000");
app.listen(3000);