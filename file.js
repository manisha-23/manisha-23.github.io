var fs= require("fs");
//asynchronous read

fs.nreadFile('input.txt',function(err,data){
console.log("Asynchronous read: " + data.toString().toUpperCase());
});