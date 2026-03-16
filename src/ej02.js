import {PI, sumar, restar, multiplicar, dividir, numerosTexto} from './modules/matematica.js';

let numero1 = 10;
let numero2 = 20;
let total;

console.clear();

console.log(`La constante PI vale '${PI}'`);

total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);

total = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${total}`);

total = multiplicar(numero1, numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${total}`);

total = dividir(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${total}`);

console.log("Elementos del array:");

for(let i = 0; i < numerosTexto.length; i++){
    console.log(numerosTexto[i]);
}