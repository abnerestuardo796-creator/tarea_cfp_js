const prompt = require('prompt-sync')();

let tabla = parseFloat(prompt("ingrese numero"));

for (let i=1; i<=10; i++){
    console.log(`${i}*${tabla} = ${i*tabla}`);
}