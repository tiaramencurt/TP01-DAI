import {URL} from 'url';

function parsearUrl(laURL){
    try{
        let url = new URL(laURL);
        return{
            host:url.origin,
            pathname:url.pathname,
            parametros:url.searchParams
        };
    }
    catch(error){
        console.log("Error:",error.message)
        return{
            host:null,
            pathname:null,
            parametros:null
        };
    }
}

let objeto = parsearUrl("url invalida");
console.log(objeto);
