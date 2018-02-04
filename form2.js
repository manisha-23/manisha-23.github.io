var express = require('express');
var app = express();

app.use(express.static('public')); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form2.html', function (req, res) {
    res.sendFile(__dirname + "/" + "form2.html");


})

app.post('/submit', function (req, res) {
    
res.setHeader('Content-Type', 'text/html');
var fn=req.body.fn.toUpperCase();
var ln=req.body.ln;
var r1=req.body.r1;
var c1=req.body.c1;
var c2=req.body.c2;
var c3=req.body.c3;
var s1=req.body.s1;

//res.write("Your name is " +'<b>'+fn+' '+ln+'</b>');
res.write("Your name is <h1>"+fn+"</h1>"); 
res.write("<br>You are "+r1);
res.write("<br>You hobbies "+c1+' '+c2+' '+c3);
res.write("<br>You Live in <font color=green>"+s1+"</font>");
    
res.end();
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
   

 