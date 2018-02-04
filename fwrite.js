var fs= require("fs");

fs.appendFile('input.txt','Simply easy learning',function(err){
console.log("Data written successfully");
});
fs.readFile('input.txt',function(err,data){
    console.log("Asynchronous read: " + data.toString().toUpperCase());
    });