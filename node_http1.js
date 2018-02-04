var http=require('http');
var server=http.createServer(function (req,res)
{
	//res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<body  bgcolor=green>');
res.write('<b>Welcome to http node js</b>');
res.write('<b>Welcome to giet</b>');
res.end();
});

server.listen(8084);
console.log('Server is running on port  8084');

//OPEN THE BROWSER AND TYPE
//http://localhost:8084