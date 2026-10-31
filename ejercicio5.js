const prompt = require('prompt-sync')();

let user_num = parseInt(prompt("ingresa el numero"));

let list_num = [10, 36, 45, 38, 101, 57, 30, 99, 63, 200];

let esta = false;

for (let i = 0; i< list_num.length; i++){
    if(user_num === list_num[i]){
        esta = true; break
    }
}

if(esta== true){
    console.log("si esta en la lista");
} else{
    console.log("no esta en la lista");
}