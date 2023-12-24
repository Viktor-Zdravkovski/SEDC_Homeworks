// let greeting = prompt("Kako sakate da ve pozdravi zhivotnoto");
// let greet = prompt("Dali sakate drug pozdrav?");

class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
    speaq(greet) {
        console.log(`${this.kind} so ime ${this.name} ve pozdravi so ${greet}`);
    }

    speak(greeting) {
        console.log(`${this.kind} so ime ${this.name} ve pozdravi so ${greeting}`);
    }
}

function Greeter() {
    let animalThatGreets = document.getElementById('animal')
    let greetToGreet = document.getElementById('greet')
    let nameOfAnimal = document.getElementById('nameOfAnimal')

    let animalGreeter = animalThatGreets.value;
    let animalGreetingMe = greetToGreet.value;
    let nameOfTheAnimal = nameOfAnimal.value;

    console.log(`Ova e ${animalGreeter} so ime ${nameOfTheAnimal} i ve pozdravuva so ${animalGreetingMe}`);
}

// const animal1 = new Animal("Zoki", "Crocodile");
// const animal2 = new Animal("Sande", "Hawk");
// const animal3 = new Animal("Viktor", "Hippo");
// const animal4 = new Animal("Martin", "Tiger");
// const animal5 = new Animal("Dimitar", "Octopus");

// animal1.speak(greeting);
// animal1.speak(greet);
// animal2.speak(greeting);
// animal2.speak(greet);
// animal3.speak(greeting);
// animal3.speak(greet);
// animal4.speak(greeting);
// animal4.speak(greet);
// animal5.speak(greeting);
// animal5.speak(greet);
