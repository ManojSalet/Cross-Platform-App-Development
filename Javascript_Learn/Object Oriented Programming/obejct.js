console.log("Objects-");
console.log("----------------------------------------");
console.log("Object Literal");
//defining object
let person = {
    f_name : 'Manoj',
    l_name : 'Salet',

    //method 
    getfunction : function () {
        return (`The name of the persone is ${person.f_name}
        ${person.l_name}`)
    },

    // object within object
    phone_number : {
        moblie: '1342',
        landline : '234'
    }
}

console.log(person.getfunction());
console.log(person.phone_number.landline);


console.log("============================================");
console.log("============================================");

console.log("Object Constructor");
//using contructor
function man(fname, lname){
    this.fname = fname;
    this.lname = lname;
}

// creating new instances of person object 
let man1 = new man('Prakash', 'Salet');
let man2 = new man('Pratik', 'Salet');

console.log(man1.fname);
console.log(`${man2.fname} ${man2.lname}`);

console.log("============================================");
console.log("============================================");

console.log("with Object.create() method ");

const coder = {
    printIntro : function () {
        console.log(`My name is ${this.name}.`)
    }
}
//cretating object 
const me = Object.create(coder);

me.name = 'Radha';
me.printIntro();

console.log("============================================");
console.log("============================================");
