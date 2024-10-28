alert('Hola mundo');

const array = ["Valencia", "De La Pava", "Valens", "Castro"];
array.push("Gaviria");

array.forEach(apellido => {
    console.log(apellido);
});

const estudiante = {
    name: 'David',
    lastname: 'Dulce',
    age: 19
};

const mybutton = document.getElementById('mybutton')
console.log(mybutton)
var beta = 'Universidad de la esquina';
let gamma = 5.0;
let delta = true;

function accion1() {
    let alfa = 'Universidad Icesi';
    for(let i = 0; i < 10; i++) {
        var A = 0;
    }
    console.log(A)
    console.log(i)
    console.log(alfa)
}

accion1();

// Lambdas, arrow functions

const accion2 = () => {
    alert('Hola');
}

mybutton.addEventListener('click', accion2)