import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "./modules/omdb-wrapper.js";
let resultado;

resultado = await OMDBSearchByPage("cars",1);
console.log(resultado);

resultado = await OMDBSearchComplete("cars");
console.log(resultado);

resultado = await OMDBGetByImdbID("tt0317219");
console.log(resultado);