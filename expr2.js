var express = require('express');
var app=express();
var v1="<b>We are learning express</b><br>Hello World<br><b><font color=red>GIET</font></b>";

app.get('/giettt',function(req,res){
res.write(v1);
res.end();
});

console.log("Web server is running at the port 3000");
app.listen(3000);



//save the program 










