const prompt = require('prompt-sync')();

let num = parseFloat(prompt("ingrese el numero"));

if (num === 0){
    console.log("neutro");
} else if(num >= 0){
    console.log("positivo");
} else if(num < 0){
    console.log("negativo");
}   else{
    console.log("Escribe bien");
}