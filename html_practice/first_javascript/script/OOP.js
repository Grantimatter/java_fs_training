class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log("Hi! I\'m "+ this.name + " and I\'m "+ this.age + " years old!");
        if(this.animal){
            this.printAnimal();
        }
    }
    printAnimal(){
        console.log(this.name + "\'s favorite animal is the " + this.animal + "!");
    }
}

const Chloe = new Person("Chloe", 20);
const Grant = new Person("Grant", 23);
Grant.animal = "elephant";
Chloe.animal = "llama";
Grant.greeting();
Chloe.greeting();

let Pet = class {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

let Bella = new Pet("Bella", "Cat");

console.log(Bella);

let animal={
    eats:true,
    walk() {
        alert("I can walk!");
    }
};

let rabbit = {
    jump:true,
    __proto__:animal
};

