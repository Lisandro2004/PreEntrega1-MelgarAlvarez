let min = 1;
let max = 20;
let intentos = 0;
let nombre = prompt ("Bienvenido al juego Adivina el numero! ¿Cual es tu nombre?");
let numero;
let aleatorio = Math.floor(Math.random () * max - min + 1) + min;


while(intentos < 5){
    numero = parseInt(prompt(nombre +" ,ingresa un numero entre el " +min+ " y el " +max));

    if(numero >= min && numero <= max){
        if(numero < aleatorio){
            alert(" el numero que ingreso es mas bajo ");
        }else if (numero > aleatorio){
            alert("el numero que ingreso es mas alto ");
        }else if(numero == aleatorio){
            break;
        }
    } else{
        alert("debe ingresar un numero entre " +min+ " y " +max);
    }
    intentos++;
}

if(numero == aleatorio){
    alert("felicidades adivinaste el numero en " +(intentos + 1)+ " intentos ");
}else{
    alert("agotaste tus intentos, suerte en la proxima");
}