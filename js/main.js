let ingresoDato= prompt(" Ingresa tu edad");

console.log(ingresoDato);

let nombreyapellido= prompt("Nombre y Apellido");

console.log(nombreyapellido);
let medicamento=prompt("principio activo")
console.log(medicamento);
let medicamentoregistrado=prompt("Nombre Registrado");
console.log(medicamentoregistrado);
let ingresomg=prompt("miligramos por comprimido");
console.log("Un comprimido o cápsula tiene:"+ ingresomg + "miligramos");
let numero2=prompt("Indicación de cuantos comprimidos a tomar por vez"); 
numero2=parseFloat(numero2)
let cantidad=prompt("Ingresa cantidad de veces en el día que tengo que tomar el medicamento")
cantidad=parseFloat( cantidad);
console.log("Por día tengo que tomar:"+ cantidad);
let comppordia=parseFloat(numero2*cantidad);
console.log("La cantidad de comprimidos que tomará en un día es:" + comppordia);


let numero1=(comppordia*ingresomg)
console.log("La cantidad en mg que se toma por día es:" + numero1);

let resultado=parseFloat(numero1*numero2/ingresomg);
console.log("EN TODO EL DIA TOMARA: " +resultado+ "COMPRIMIDOS");
