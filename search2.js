var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express = require('express');
var app = express();

app.use(express.static('public')); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/search2', function (req, res) {
    res.sendFile(__dirname + "/" + "search2.html");
});

app.post('/search2', function (req, res) {

res.setHeader('Content-Type', 'text/html');
var sr=req.body.sr;
var xyz=req.body.xyz;

MongoClient.connect(url, function(err, db) {

var query = { login_id: sr };   

var status;

if(xyz==1234) { status="success" } else { status="failed" }  res.send(status); 
 
 
var query1 = {password:xyz};//converted into json format


  db.collection("student").find(query,query1).toArray(function(err, result1) {

var i=0;

try {
var roll1=result1[i]['roll'];
var email1=result1[i]['email'];

res.write("<br>"+roll1+"<br>"+email1);     
res.end();
}
catch (ex) {
    console.log("Error");
res.write("Bad Login_id");
res.end();
 }

});

});

});
var server = app.listen(5000, function () {
    console.log('Node server is running on 5000..');
});