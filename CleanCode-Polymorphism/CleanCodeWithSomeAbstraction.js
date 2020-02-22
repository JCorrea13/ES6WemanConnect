/**
 * This file try to explain how we can use some abstraction and 
 * polymorphism, by overwriting methods to keep our code cleaner.
 */


class Animal{
    constructor(name){
        this.name = name;
    }

    Talk(){
        // This method should be overwritten for all child classes
    }

}

class Chicken extends Animal{
    Talk(){
        console.log('pio pio');
    }
}

class Dog extends Animal{
    Talk(){
        console.log('guau guau');
    }
}

class Cat extends Animal{
    Talk(){
        console.log('miau miau');
    }
}

// Now my code is cleaner. All animals can Talk (in different way)
function printPetNames(animals){
    for(let animal of animals){
        animal.Talk();
    }
}

const animals = [
    new Dog('dog1'),
    new Chicken('chicken1'),
    new Dog('dog2'),
    new Cat('cat1'),
    new Cat('cat2')
];

printPetNames(animals);