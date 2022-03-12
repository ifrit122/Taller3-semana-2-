
/* Ejercicio1


let edad1= parseInt(prompt("Ingresa edad"));
let edad2= parseInt(prompt("Ingresa edad 2"));


        if (edad1>edad2) {
            

            alert("el edad mayor es " + edad1);
            alert("el edad menor es " + edad2);
        }
        

        if (edad1<edad2) {
            

            alert("el edad mayor es " + edad2);
            alert("el edaad menor es " + edad1);
        
    }
*/

/*
ejercicio 2

let contador=1;
let limite=prompt("Cuantos estudiantes desea evaluar?");
let acum=0;
let prom=0;
let nota=0;

while (contador<= parseInt(limite)) {
    let estudiante =prompt("digite el nombre del estudiante");
    let nota =parseInt(prompt("digite la nota de este estudiante"));
  
    document.write(estudiante + "<br>");
    document.write(nota + "<br>");
    
    acum= (nota+acum);
    prom=acum/contador
          
    contador++;

}
document.write ("el promedio de nota es " + prom + "<br>");
alert("fin de ciclo");
*/

/* ejercicio 3

let palabraclave = "dom";
let clave =prompt("Cual es la palabra clave?");

if (palabraclave==clave){

    alert ("Bienvenidos al nuevo club de los Magios!");

}
else if (palabraclave!=clave){
    alert ("No puedes ingresar, no eres miembro!");

}
*/

/*
let cliente = prompt("Tu nombre:");
let vacuna =prompt("estas vacunado? \n 1.Si \n 2.No");

if (vacuna==1){

    alert ("Bienvenido!");
}
else if (vacuna==2){
    alert ("Por favor ve a vacunarte.");

}*/

/*

ejercicio 5

let paciente = prompt("registra tu nombre");
let dia = parseInt(prompt("registra tu dia de nacimiento")) ;
let mes = parseInt(prompt("registra el numero del mes de tu nacimiento"));
let ano = parseInt(prompt("registra los 4 digitos de tu año de nacimiento"));
let anoactual = parseInt(2021);
let mesactual = parseInt(3);


    finala1 = parseInt((anoactual-ano));
    dias1 = parseInt((30 - dia));

    meses1 =  parseInt(((12- mes)+(mesactual)));
    if (meses1 > 12) {
        meses2 = mes;

        nuevoano = (finala1 + 1);
        document.write( paciente + " tu edad es " + nuevoano + " años " + meses2 + " meses y " + dias1 + " dias");

    }

else {

    document.write( paciente + " tu edad es " + finala1 + " años " + meses1 + " meses y " + dias1 + " dias");
}
    */



/*

Ejercicio 6
let capital= parseInt(prompt("Ingrese el nombre del pais \n 1. Colombia \n 2. Argentina \n 3. Peru \n 4. Japon \n 4. Alemania"));

switch(capital) {

    case 1:
        alert ("Bogota");
        break;

    case 2:
        alert ("Buenos Aires");
        break;

    case 3:
        alert ("Lima");
        break;

    case 4:
        alert ("Tokio");
        break;
    
    case 5:
        alert ("Berlin");
        break;

   

            default:
                alert ("No es una opcion valida");
                break;
}
    
  */

/*
Ejercicio 7
let tabla = 8;
let limite = 0;
for (let i= 1; i<=100; i++){
    let multi = tabla*i;
   
    document.write("Numero   " + tabla + "   X   " + i + "   =   " + multi + "<br>");
    
}

*/

/*
Ejercicio 8
let diccionario= parseInt(prompt("Que palabra deseas traducir? \n 1. Deseo \n 2. Pastel \n 3. Regalo \n 4. Cumpleaños \n 4. Vela"));

switch(diccionario) {

    case 1:
        alert ("Desire");
        break;

    case 2:
        alert ("Cake");
        break;

    case 3:
        alert ("Gift/Present");
        break;

    case 4:
        alert ("Birthday");
        break;
    
    case 5:
        alert ("Candle");
        break;

   

            default:
                alert ("No es una opcion valida");
                break;
}


  */
