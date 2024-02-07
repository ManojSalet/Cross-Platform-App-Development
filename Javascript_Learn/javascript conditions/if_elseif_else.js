//if & else statement
var age = 25;
var votingAge = 18;

if (age >= votingAge) {
    console.log("Old enough to vote!");
}
else {
    console.log("Not old enough to vote.");
}

console.log("==========================================");
console.log("==========================================");

var string = "CodeChef";

if (string.length >= 5) {
    console.log("Long String");
}
else {
    console.log("Short String");
}

console.log("==========================================");
console.log("==========================================");

function check(a, b) {
    if (a >= b) {
        console.log("Coding is Fun");
    }
    else {
        console.log("");
    }
}

check(25, 20);

console.log("==========================================");
console.log("==========================================");

function solve(r, b) {
    if (r > b) {
        console.log("Rob Scored higher marks than Bob");
    }
    else if (b == r) {
        console.log("Bob & Rob both scored the same");
    }
    else {
        console.log("Bob scored higher marks than Rob");
    }
}

solve(20, 34);

console.log("==========================================");
console.log("==========================================");

var ram = 74;
var karan = 82;

if (ram > karan) {
    console.log("Ram is heavier than Karan");
} else if (ram <= karan) {
    console.log("Karan is heavier than Ram");
} else {
    console.log("Ram & Karan have the same weight!");
}

ram = 78
karan = 78

if (ram > karan) {
    console.log("Ram is heavier than Karan");
} else if (ram < karan) {
    print("Karan is heavier than Ram");
} else {
    console.log("Ram & Karan have the same weight!");
}

console.log("==========================================");
console.log("==========================================");

function printScore(score) {
    if (score === 100) {
        console.log("Perfect score");
    } else if (score >= 80) {
        console.log("Almost perfect score");
    } else {
        console.log("Nice try");
    }
}

printScore(100);

console.log("==========================================");
console.log("==========================================");
console.log("-------with && ----------------")
var a = 15;

// a % 7 returns the remainder when a is divided by 7
if ((a % 7 === 0) && (a % 5 === 0)) {
    console.log("The number is divisible by both 5 & 7");
} else {
    console.log("The number is not divisible by both 5 & 7");
}

console.log("==========================================");
console.log("==========================================");

console.log("-----------with ||--------");
function check(z, x, c) {
    // complete the function 
    if ((c > x) || (c > z)) {
        console.log("PASS");
    }
    else {
        console.log("FAIL");
    }
}

check(5,6,7);
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");
console.log("==========================================");