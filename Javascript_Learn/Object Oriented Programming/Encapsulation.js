console.log("Encapsulation in Javascript")
console.log("--------------------------")

class Friend {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    add_Address(add){
        this.add = add;
    }

    getDetails(){
        console.log(`Name is ${this.name}, Address is: ${this.add}`);
    }
}

let F1 = new Friend(1,'Manoj');
let F2 = new Friend(2,'Pratik');
F1.add_Address('Shubhash');
F1.getDetails();

F2.add_Address('Shubhash');
F2.getDetails();

console.log("==========================================================");
console.log("==========================================================");

console.log('Abstraticon Example');
function Friend2(fname,lname){
    let fristname = fname;
    let lastname = lname;

    let getDetails_noaccess = function(){
        return (`First Name is : ${fristname} Last Name is : ${lastname}`);
    }

    this.getDetails_access = function(){
        return (`First name is : ${fristname}, Last name is : ${lastname}`);
    }
}

let F_1 = new Friend2('Prakash', 'Salet');
console.log(F_1.fristname);
console.log(F_1.lastname);
console.log(F_1.getDetails_noaccess);
console.log(F_1.getDetails_access());

console.log("==============================================");
console.log("==============================================");