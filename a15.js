var customer = {
name: 'Anjan',
email: 'anjanch1@gmail.com',
age: 42
}

customer['phone']=1234567890;
for(var att in customer)
{

console.log(att);
console.log(att+": "+customer[att]);

}


console.log("\n");
delete customer['age'];
for(var att in customer)
{

console.log(att);
console.log(att+": "+customer[att]);

}