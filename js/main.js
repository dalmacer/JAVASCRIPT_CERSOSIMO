let ingresoDato= prompt(" Ingresa tu edad");

console.log(ingresoDato);

let nombreyapellido= prompt("Nombre y Apellido");

console.log(nombreyapellido);
let medicamento=prompt("principio activo")
console.log(medicamento);
let medicamentoregistrado=prompt("Nombre Registrado");
console.log(medicamentoregistrado);
let ingresomg=prompt("miligramos por comprimido");
console.log("Un comprimido o cápsula tiene:"+ ingresomg);
let numero2=prompt("Indicación por vez"); 

let comppordia=parseFloat(numero2*3);
console.log("La cantidad de comprimidos que tomará en un día es:" + comppordia);


let numero1=(comppordia*ingresomg)
console.log("La cantidad en mg que se toma por día es:" + numero1);

let resultado=parseFloat(numero1*numero2/ingresomg);
console.log("EN TODO EL DIA TOMARA: " +resultado+ "COMPRIMIDOS");
