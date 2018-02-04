var http= require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
	db.collection("emp1").find().toArray(function(err,result){
console.log(result);
db.close();
});
});