let ingresoDato= prompt(" Ingresa tu edad");

console.log(ingresoDato);

let nombreyapellido= prompt("Nombre y Apellido");

console.log(nombreyapellido);
let medicamento=prompt("droga")
console.log(medicamento);
let medicamentoregistrado=prompt("NR");
console.log(medicamentoregistrado);
let numero2="1"; 
console.log(" Ud tomará" + numero2 +"comprimido a la mañana" +numero2+ "comprimido a la tarde" +numero2+" comprimido a la noche");
let comppordia=(1*3);
console.log("La cantidad de comprimidos que tomará en un día es:" + comppordia);

let ingresomg=prompt("miligramos por comprimido");
console.log("Un comprimido o cápsula que ud. va a tomar cada 8 hs tiene:"+ ingresomg);
let numero1=(comppordia*ingresomg)
console.log("La cantidad en mg que se toma por día es:" + numero1);

let resultado=parseFloat(numero1*numero2/ingresomg);
console.log("EN TODO EL DIA TOMARA: " +resultado+ "COMPRIMIDOS");
