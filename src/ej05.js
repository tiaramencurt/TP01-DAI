import {URL} from 'url';
let miUrl;
let miObjeto;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL){
    let url = new URL(laURL);
    return {
        host: url.origin,
        pathname: url.pathname,
        parametros: url.searchParams
    };
}
