import { getCurrencyAbbreviation, getCurrency } from 'currency-map-country';

function obtenerMoneda(codigo){
    let codigoMoneda = getCurrencyAbbreviation(codigo);
    if(codigoMoneda == undefined){
        return null;
    }
    let moneda = getCurrency(codigoMoneda);
    return moneda.name;
}

let codigoPais = 'AR';
let monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais='UZA';
monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);