class Chicken {
    constructor(name){
        this.name = name;
    }

    Pio(){
        console.log('pio pio');
    }
}

class Dog {
    constructor(name){
        this.name = name;
    }

    Guau(){
        console.log('guau guau');
    }
}

class Cat {
    constructor(name){
        this.name = name;
    }

    Miau(){
        console.log('miau miau');
    }
}

// This is the dirty code ... we have to validate different scenarios
function printPetNames(animals){
    for(let animal of animals){
        if(animal instanceof Dog){
            animal.Guau();
        }else if(animal instanceof Cat){
            animal.Miau();
        }else if(animal instanceof Chicken){
            animal.Pio();
        }
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