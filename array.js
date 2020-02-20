/*function buildSaludo(){
    const saludo = 'hola';

    const saludar = () => {
        console.log(saludo);
    };

    return saludar;
}
const builder = buildSaludo();
builder();*/

/*function process(data){
    const [name, age = 10] = data;

    console.log(name);
    console.log(age);
    console.log(data);
}

const data = ['Blanca'];
process(data);*/

const data = {
    name: 'jose',
    age: 24,
    latsName: 'Correa'
};

const { age, latsName = 'Perez' } = data;
console.log(latsName);
console.log(age); 