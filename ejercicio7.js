const prompt = require('prompt-sync')();

let num_user =parseInt(prompt("ingresa el numero"));

let suma = 0

while(num_user >=0){
    suma += num_user
    num_user= parseInt(prompt("ingresa otro numero"));
} console.log("suma total de todos los numeros positivos: " + suma);