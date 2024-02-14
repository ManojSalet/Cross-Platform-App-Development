console.log("=============================================");
console.log("=============================================");

console.log("JSON Objects in javascript");

//Accessing object using '.' notation
console.log("Accessing object using '.' notation");

let myOerder;

myOerder = {
    "proName" : "Mobile",
    "cost" : "10000" 
};
console.log(`Product Name :- ${myOerder.proName} and his Price is :- ${myOerder.cost}`);

//Accessing with '[]' bracket
console.log("Accessing with '[]' bracket");
console.log(`Product Name :- ${myOerder["proName"]} and his Price is :- ${myOerder["cost"]}`);