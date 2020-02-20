class NameBuilder {
    
    constructor(lastName){
        this.lastName = lastName;
    }

    getNameBuilder() {
        return (firstName)=> `${firstName} ${this.lastName}`;
    }
}



const family = new NameBuilder('Correa');
const buildFullName = family.getNameBuilder();

const familyNames = ['Renata', 'Maria', 'Julieta', 'Manuel'];

for(let i = 0; i < familyNames.length; i++){
    const fullName = buildFullName(familyNames[i]);
    console.log(fullName);
}
