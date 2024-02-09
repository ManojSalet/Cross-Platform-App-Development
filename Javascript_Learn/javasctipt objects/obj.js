//Simple object
console.log("simple Object")
const o = new Object();
o.foo = 42;
console.log(o);

console.log("=================================");
console.log("=================================");

console.log("simple object 2");

let school = {
    name : 'Vivekananda School',
    location : 'Delhi',
    established : '1971',
    20 : 1000,
    displayInfo : function(){
        console.log(`${school.name} was established in ${school.established} at ${school.location}`);

        console.log("objects properties");
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}

school.displayInfo();

console.log("============================================");
console.log("============================================");
console.log("============================================");
console.log("Inherited Properties");

const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));

console.log("============================================");
console.log("============================================");
console.log("Accessing Object Members");
console.log(school.name);
console.log(school.established);

console.log("============================================");
console.log("============================================");




