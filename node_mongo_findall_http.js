var http= require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var server=http.createServer(function(req,res)
{
MongoClient.connect(url,function(err,db)
{
db.collection("emp1").find().toArray(function(err,result)
{ 
console.log("name:"+result[0]["name"]);
for(var i=0;i<3;i++)
{
var str="<br><br>"+result[i]['name'];
res.write(str);
}
db.close();
res.end();
});
});
});

server.listen(8084);
console.log('Server is running on port 8084');