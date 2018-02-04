var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/input',function (req,res){
res.sendFile( __dirname + "/" + "form_get.html");
})