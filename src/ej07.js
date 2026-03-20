import currencyMap from 'currency-map-country';

function obtenerMoneda(codigo) {
    try {
        let moneda = currencyMap.getCurrency(codigo);
        console.log(moneda)
        if (moneda == null) {
            return null;
        }
        return moneda.name;
    } catch (error) {
        return null;
    }
}

let codigoPais = 'ARS';
let monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);