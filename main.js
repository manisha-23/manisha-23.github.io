var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express = require('express');
var app = express();

app.use(express.static('public')); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

/////************Insert Code Begins***********

app.get('/insert', function (req, res) {
    res.sendFile(__dirname + "/" + "insert.html");
});

app.post('/insert', function (req, res) {
    
res.setHeader('Content-Type', 'text/html');
var sr=req.body.sr;
var sn=req.body.sn;
var sp=req.body.sp;
var r1=req.body.r1;
var se=req.body.se;
var ss=req.body.ss;
var sc=req.body.sc;
var sem1=req.body.sem1;
var sem2=req.body.sem2;

res.write("Your name is " +'<b>'+sn+'</b>'); 
res.write("<br>You are "+r1);
res.write("<br>Your email "+se);
res.write("<br>Your Stream "+ss);
res.write("<br>You Live in "+sc);
res.write("<br>Your Score in sem1 "+sem1);
res.write("<br>Your Score in sem2 "+sem2);    
res.end();

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { roll: sr,name: sn, password: sp,gender: r1, email: se,stream: ss, city: sc, sem1: sem1,sem2: sem2 };
 db.collection("student").insertOne(myobj, function(err, res) 
{
    if (err) throw err;
    console.log("1 record inserted");
    //db.close();

  });
 });
});
////**********Insert code Ends***********//////


////******Select all code Start*******/////////

app.get('/select', function (req, res) {
    
MongoClient.connect(url, function(err, db) {

db.collection("student").find().toArray(function(err, result) {
res.write("<table border=1>"); 
res.write("<tr><td>Roll No  </td><td>Name  </td><td>Email   </td></tr>");      
for(var i=0;i<result.length;i++)
{
var roll=result[i]['roll'];
var name=result[i]['name'];
var email=result[i]['email'];

res.write("<tr><td>"+roll+"</td><td>"+name+"</td><td>"+email+"</td></tr>"); 
}
res.write("</table>"); 
//db.close();  
res.end();
  

  });
 });
});

////******Select all code Ends*******/////////



////******Select particular code Start*******/////////

app.get('/search', function (req, res) {
    res.sendFile(__dirname + "/" + "search.html");
});

app.post('/search', function (req, res) {

res.setHeader('Content-Type', 'text/html');
var sr=req.body.sr;

MongoClient.connect(url, function(err, db) {
 
var query = { roll: sr };


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


////******Select particular code ends*******/////////







var server = app.listen(5000, function () {
    console.log('Node server is running on 5000..');
});
   

 