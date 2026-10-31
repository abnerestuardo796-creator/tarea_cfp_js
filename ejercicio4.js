const prompt = require('prompt-sync')();

let num_user = parseInt(prompt("ingresa el numero: "));

if(num_user %5 === 0 && num_user %3 === 0){
    console.log("Es divisible denro de anbos numeros");
} 
else if(num_user %5 === 0){
    console.log("solo se divide dentro de 5");
} 
else if(num_user %3 === 0){
    console.log("solo se divide dentro de 3");
}else {
    console.log("no es divisible por ninguno")
}