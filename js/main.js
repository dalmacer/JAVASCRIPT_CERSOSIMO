// Para calcular la dosis a tomar de un medicamento. Ingreso de datos Nombre y apellido edad y luego ingreso de variables, Principio activo y nombre comercial. Miligramos de un comprimido, indicación médica de cantidad de veces por día a tomar el medicamento. Cálculo de los miligramos a tomar. Regla de tres simple para los cálculos.
let savedPIN=2533
function login(){
    let ingresar=false;
for (let i=3; i>=0; i--){
    let userPIN= prompt("Ingresa tu PIN. Tenés " + (i+2)+ "Oportunidades");

    if(userPIN===savedPIN){
        alert("Ingreso exitoso")
        ingresar=true;
        break;
      }else{
        alert("Error. Te quedan " + i +  "intentos")
    }

}
return ingresar;
}
console.log(login());

let nombreyapellido= prompt("Nombre y Apellido");
    console.log(nombreyapellido); 

alert("BIENVENIDO/A"+ nombreyapellido);

let ingresoDato= prompt("Ingresa tu edad");
    console.log(ingresoDato);

let alergia= prompt("¿Es alérgico a algún medicamento?")
switch(alergia){
    case"si":
    console.log ("Antes de continuar con el cálculo de dosis consulte a su médico");
    break;
    case"no":
    console.log ("Continúe con el calculo de dosis");
    break;
    case"No lo se":
    console.log ("Consulte a su médico");
    break;

}
        
let medicamento=prompt("principio activo")
       console.log(medicamento);
let medicamentoregistrado=prompt("Nombre Registrado");
    console.log(medicamentoregistrado);
let ingresomg=prompt("miligramos por comprimido");
     console.log("Un comprimido o cápsula tiene:"+ ingresomg + "miligramos");
let numero2=prompt("Indicación de cuantos comprimidos a tomar por vez"); 
numero2=parseFloat(numero2);
  console.log("Tomará" + numero2 + "comprimidos");
let cantidad=prompt("Ingresa cantidad de veces en el día que tengo que tomar el medicamento")
cantidad=parseFloat( cantidad);
      console.log("Por día tengo que tomar:"+ cantidad +"comprimidos");


let comppordia=parseFloat(numero2*cantidad);
   console.log("La cantidad de comprimidos que tomará en un día es:" + comppordia);


let numero1=(comppordia*ingresomg);
    console.log("La cantidad en mg que se toma por día es:"+ numero1);
let resultado=parseFloat(numero1*numero2/ingresomg);

    console.log("EN TODO EL DIA TOMARA:", resultado , "COMPRIMIDOS");

 

    








