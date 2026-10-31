const prompt = require('prompt-sync')();

let num_user =parseInt(prompt("ingresa el numero"));

let list_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let se_encuentra = false;

for (let i = 0; i < list_num.length; i++) {
    if(num_user === list_num[i]) {
        se_encuentra = true;
        break
    }
}

if(se_encuentra == true) { 
    console.log("este numero si esta en la lista")
} else {
    console.log("no esta en la lista")
}