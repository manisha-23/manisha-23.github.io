var data='kolkata:delhi:mumbai:odisha';
var strs=data.split(':');
for (var index in strs)
console.log(strs[index])


console.log("\n");

for (var index in strs){
console.log(strs[index].length);

console.log(strs[index].toUpperCase());

console.log(strs[index].toLowerCase());
console.log("\n");
}
console.log(data.length);
console.log(data.toUpperCase());