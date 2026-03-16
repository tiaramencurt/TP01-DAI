import currency from 'currency-map-country';

function obtenerMoneda(codigo){
    let moneda = currency.getCurrency(codigo);
    if(moneda==undefined){
        return null;
    }
    return moneda;
}

let codigoPais = 'AR';
let monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais='UZA';
monedaDelPais = obtenerMoneda(codigoPais)
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);