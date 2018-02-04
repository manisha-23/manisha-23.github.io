var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/input',function (req,res){
res.sendFile( __dirname + "/" + "form_get.html");
})
app.get('/form_get',function (req,res){
f1=req.query.first_name
f2=req.query.last_name

res.write("<b>"+f1+"<br>");
res.write(f2+"<br>");
res.end();
console.log(f1,f2);
})
console.log("Web server started at 3000");
app.listen(3000);