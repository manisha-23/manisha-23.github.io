

var customer = {
name: 'Anjan',
email: 'anjanch1@gmail.com',
age: 42
}
console.log(customer);


console.log("\n");

console.log('Name:'+customer.name);
console.log('Email:'+customer.email);
console.log('Age:'+customer.age);


console.log("\n");

customer['age']=40;
console.log('Edited Age:'+customer.age);

console.log("\n");

for(var att in customer)
{
//display the attribute name
console.log(att);



//display the attribute and value
console.log(att+": "+customer[att]);

}

console.log("\n");


var count=0;
for(var att in customer){
if(att=="email"){
console.log(att+": "+customer[att]);
}
count++
}
console.log(count);