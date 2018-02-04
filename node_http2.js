var http=require('http');
var server=http.createServer(function (req,res)
{
	//res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<body  bgcolor=cyan>');

for(var i=1;i<7;i++)
{
res.write('<b><H'+i+'>GIET</H'+i+'></b>');
}
res.end();
});

server.listen(8084);
console.log('Server is running on port  8084');

//OPEN THE BROWSER AND TYPE
//http://localhost:8084