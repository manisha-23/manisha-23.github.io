var f=1;
var factorial=function(num){

while(num!=0)
{
	f=f*num;
	num--;
}
return f;
}

exports.factorial=factorial;
exports.f=f;