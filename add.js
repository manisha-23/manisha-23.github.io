//1. wap which will accept Two no and add them.
//The url http://localhost:5001add and the html file is  add.html.
//HINT:-
//res.write(" "+s);
//var f1 = parseInt(req.body.f1);

//2.wap which will accept Two no,one is the no.,2nd is the limit of table.
//and display the mult tab in html table format.
//the url http://localhost:5001/add and the hml file is add.html



var express = require('express');
var app = express();
//app.use(express.static('public'));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/add.html' , function (req,res){
res.sendFile(__dirname + "/" + "add.html");
})
app.post('/submit',function(req,res){

var f1 = parseInt(req.body.first_number);
var f2 = parseInt(req.body.last_number);
var s=f1+f2;
res.write(s + '  Submitted Successfully!');
res.end();
});

var server =app.listen(5001,function () {
console.log('Node server is running on 5001');
});



//app.use(express.static('public'));