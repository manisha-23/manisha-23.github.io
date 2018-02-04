var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

var express = require('express');

var app = express();

app.use(express.static('public')); 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/select', function (req, res) {
    
MongoClient.connect(url, function(err, db) {

db.collection("student").find().toArray(function(err, result) {
res.write("<table border=1>"); 
res.write("<tr><td>Roll No  </td><td>Name  </td><td>Email   </td><td>gender</td><td>stream</td><td>city</td><td>sem1</td><td>sem2</td></tr>");      
for(var i=0;i<result.length;i++)
{
var roll=result[i]['roll'];
var name=result[i]['name'];
var email=result[i]['email'];
var gender=result[i]['gender'];
var stream=result[i]['stream'];
var city=result[i]['city'];
var sem1=result[i]['sem1'];
var sem2=result[i]['sem2'];


res.write("<tr><td>"+roll+"</td><td>"+name+"</td><td>"+email+"</td><td>"+gender+"</td><td>"+stream+"</td><td>"+city+"</td><td>"+sem1+"</td><td>"+sem2+"</td></tr>"); 
}
res.write("</table>"); 
//db.close();  
res.end();
  

  });
 });
});

var server = app.listen(5000, function () {
    console.log('Node server is running on 5000..');
});