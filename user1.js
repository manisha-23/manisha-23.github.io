var express=require('express');
var app = express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function(req,res){
	res.render('user1',{  user:{ name:"Ayush",age:"20" } }  );
});

console.log("Web server is started at 3000");
app.listen(3000);

//save the program as exp1.js and node exp1.js from CUI 
//from the browser
//http://127.0.0.1:3000/

//'user1' is the pug file name & the user is the coll name,name is the field name and ayush is the value.