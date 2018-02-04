var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express = require('express');
var app = express();

app.use(express.static('public')); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/search', function (req, res) {
    res.sendFile(__dirname + "/" + "search.html");
});

app.post('/search', function (req, res) {

res.setHeader('Content-Type', 'text/html');
var sr=req.body.sr;

MongoClient.connect(url, function(err, db) {
 
var query = { roll: sr };      //converted into json format


  db.collection("student").find(query).toArray(function(err, result1) {

var i=0;

try {
var roll1=result1[i]['roll'];
var email1=result1[i]['email'];

res.write("<br>"+roll1+"<br>"+email1);     
res.end();
}
catch (ex) {
    console.log("Error");
res.write("Bad roll no");
res.end();
 }

});

});

});
var server = app.listen(5000, function () {
    console.log('Node server is running on 5000..');
});