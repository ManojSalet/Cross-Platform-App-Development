console.log("for loop demos");

let x;
for (x = 1; x <= 4; x++){
    console.log("Value of x : " + x);
}

const subjects = ["java", "python","C", "C++"];
let len = subjects.length;
let emt = "";

for (i = 0; i<len; i++){
    emt += subjects[i] + " ";
}


//demo of for/in 
let y;
let text = "";
for (y in subjects){
    text += subjects[y] + " ";
}

console.log(emt);
console.log("------demo of for/in----------");

console.log(text);
console.log('-------------------------------------------------')