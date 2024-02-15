// Create a class Animal that has:
// name
// type - carnivore/herbivore/omnivore
// age
// size
// eat - a method that checks if the input is an Animal.
// If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name).
// If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
// If the input is not an animal just write: The animal (this animal name) is eating (the input).
// isEaten = default false


class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.eat = function (animal, animalToEat, sizeOfAnimal) {
            if (animal == true && this.type === `herbivore`) {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            } else if (animal == true) {
                this.isEaten == false;
                console.log(`The animal ${this.name} ate the ${animalToEat}`);
            } else if (sizeOfAnimal > this.size) {
                console.log(`The animal ${this.name} tried to eat the ${animalToEat} but it was too large`);
            } else if (animal !== true) {
                console.log(`The animal ${this.name} is eating ${animalToEat}`);
            }
        }
    }
}

let Animal1 = new Animal('Crocodile', 'carnivore', 12, 32)
let Animal2 = new Animal('Snake', 'herbivore', 14, 250)
// console.log(Animal1);
Animal1.eat(true, "Zebra", 20)
// console.log(Animal2);
Animal2.eat(false, "Zebra", 2000)





































// class Animal {
//     constructor(name, type, age, size) {
//         this.name = name;
//         this.type = type;
//         this.age = age;
//         this.size = size;
//         this.isEaten = false
//         this.eat = function (animal, someAnimalToEat, theSize) {
//             if (animal == true && this.type === "herbivore") {
//                 console.log(`The animal ${this.name} is a herbivore and does not eat other animals, so it cant eat ${someAnimalToEat}`);

//             }
//             else if (animal == true) {
//                 console.log(`The animal ${this.name} ate ${someAnimalToEat}`)
//                 this.isEaten = true;
//             }
//             else if (theSize > this.size) {
//                 console.log(`The animal ${someAnimalToEat} tried to eat ${this.name} but it did not succeed because ${someAnimalToEat} was bigger`);
//             }
//             else if (animal !== true) {
//                 console.log(`The ${this.name} ate ${someAnimalToEat}`);
//             }

//         }
//     }
// }

// let theAnimal = new Animal("Lion", "herbivore", 14, 200)
// let theOtherAnimal = new Animal("Rat", "omnivore", 14, 250)
// console.log(theAnimal);
// theAnimal.eat(true, "Zebra", 20)
// console.log(theOtherAnimal);
// theOtherAnimal.eat(false, "Zebra", 2000)