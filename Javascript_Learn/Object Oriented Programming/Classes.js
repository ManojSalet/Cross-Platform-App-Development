console.log("Classes In javascript");
console.log("-------------------------------------");

function Student(name, sub){
    this.name = name;
    this.sub  = sub;
}

Student.prototype.getDetails = function () {
    console.log(`The name of student is ${this.name} and his subject is ${this.sub}`);
}

let s1 = new Student('Manoj', 'Python');
let s2= new Student('Sanjana', 'Java');

console.log(s1.name);
console.log(s2.name);
console.log(s1.getDetails());

console.log("============================================");
console.log("============================================");
