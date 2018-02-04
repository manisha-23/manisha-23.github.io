var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/input',function (req,res){
res.sendFile( __dirname + "/" + "mult.html");
})

app.get('/mult',function (req,res){
f1=req.query.product;

var p=1;
for(i=1;i<=10;i++)
{
p=f1*i;
res.write(f1+"*"+i+"="+p);

res.end();
}
})
console.log("Web server started at 3000");
app.listen(3000);