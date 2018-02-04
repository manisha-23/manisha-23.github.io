//nodejs to mongodb

step1. create the db and call in mongodb
db
mydb
use mydb
db
mydb
db.emp1.insert({name:"Anjan",age:42});
db.emp1.insert({name:"Arun",age:36});

db.emp1.insert({name:"Guru",age:30});
db.emp1.find();


step.2)
--create a notepad with mongo_findall.js and write
//display the first document

var http= require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){          
                    //db----//>pointer
	db.collection("emp1").find().toArray(function(err,result){   //result----->array which through the data to the web browser
console.log(result);
db.close();
});
});


//*****we can't fetch the data if npm is not installed


_____________________________________________________________________________________________________________________________________________

mongodb+nodejs+web server--->
______________________________________________________________________________



var http= require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var server=http.createServer(function(req,res)

MongoClient.connect(url,function(err,db){

db.collection("emp1").find().toArray(function(err,result){ 
console.log("name:"+result[0]["name"]);
for(var i=0;i<4;i++)
{
var str="<br><b>"+result[i]['name'];
res.write(str);
}
db.close();
res.end();
});
});
});














