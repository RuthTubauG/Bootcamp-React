//1- Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor
/*
let numero = prompt('Dime un número entre 50 y 100');

while (numero < 50 || numero > 100) {
    numero = prompt('El número introducido no es correcto');
}

console.log('Número introducido correcto!');
*/

//2- En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido
/*
let num = prompt('Dime un número entre 2 y 10')
while (num <2 || num > 10) {
    num = prompt('El número introducido no es correcto');
}

console.log(`Número introducido correcto! Aqui tienes la tabla de multiplicar del número ${num}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
    
}
*/

//3- Con un while  construye y muestra por consola un "triángulo" de 7 líneas como el siguiente
/*
// *
// **
// ***
// ****
// *****
// ******
// *******

let estrellas = 7;
let linea = 1;

while (linea <= estrellas) {
    console.log('*'.repeat(linea));
    linea++;
}
*/

//4- En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros

/*
const nums = [2, 15, -13, 23, 75, 4, 12, -7, 19, 0];

let positivos = 0;
let negativos = 0;
let ceros = 0;

*/

/* for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num < 0)      negativos++;
  else if (num > 0) positivos++;
  else                  ceros++;
} */

// for (const num of nums) {
//   if (num < 0)      negativos++;
//   else if (num > 0) positivos++;
//   else                  ceros++;
// }

/*
for (const i in nums) {
  const num = nums[i];
  if (num < 0)      negativos++;
  else if (num > 0) positivos++;
  else                  ceros++;
}

console.log(`
RESULTADO
Positivos:  ${positivos}
Negativos:  ${negativos}
Ceros:      ${ceros}  
`);
*/

//5- Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100.
// Se considera que cuando el usuario introduce un valor, éste es siempre válido.
// Con cada intento del jugador,el programa le dice su el número secreto es mayor o menor.
// El jugador tiene 6 intentos para adivinar el número.
// Para crear un número aleatorio real usaremos este código
// Math.floor((Math.random() * 100) + 1);

/*
let secreto = Math.ceil(Math.random() * 100);
let intentos = 6;
let hasGanado = false;

let numeroUsuario = Number(prompt('Dime un número del 1 al 100 a ver si lo adivino.'));


while (!hasGanado && intentos >= 1) {
  
  if (numeroUsuario > secreto) {
    intentos--;
    numeroUsuario = Number(prompt(`El número secreto es MENOR que ${numeroUsuario}. Te quedan ${intentos} intentos.`));
  } else if (numeroUsuario < secreto) {
    intentos--;
    numeroUsuario = Number(prompt(`El número secreto es MAYOR que ${numeroUsuario}. Te quedan ${intentos} intentos.`));
  } else {
    hasGanado = true;
  }

}

if (!hasGanado) {
  console.log(`¡Has perdido! 😢 El número secreto era ${secreto}`);
} else {
  console.log('¡Has ganado! 🎉🥳');
}
*/
