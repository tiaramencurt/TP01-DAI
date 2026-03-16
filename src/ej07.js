import currencyMap from 'currency-map-country';

function obtenerMoneda(codigo) {
    try {
        let moneda = currencyMap.getCurrency(codigo);
        if (codigoMoneda == undefined) {
            return null;
        }
        return moneda.name;
    } catch (error) {
        return null;
    }
}

let codigoPais = 'AR';
let monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);