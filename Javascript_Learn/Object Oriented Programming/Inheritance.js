console.log("Inheritance in javascript");

class dad {
    constructor(name) {
        this.name = name;
    }

    disp() {
        return (`Name is ${this.name}`);
    }
}

class sun extends dad {
    constructor(name,id) {
        this.id = id;
        super(name);
    }

    disp() {
        return (`Id is ${this.id}, Name is ${super.disp()}`);
    }
}


let sun1 = new sun('Manoj', 1);
console.log(sun1.disp());