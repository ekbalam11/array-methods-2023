/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const mayor10 = numbers.find((n)=> n > 10)
const mayor10alt = numbers.find(function(number) {
    return number > 10;
});

console.log("mayor10: ", mayor10);
console.log("mayor10alt: ", mayor10alt);


/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const mayor20 = numbers.some((n) => n > 20);
const mayor20alt = numbers.some(function(number) {
  return number > 20;
});


console.log("mayor 20: ", mayor20); // Output: true
console.log("mayor 20 alt: ", mayor20alt); // Output: true

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const areOdd = numbers.every((n) => n % 2 != 0);
const areOddAlt = numbers.every(function(number) {
    return number % 2 != 0;
});

console.log("Son impar? ", areOdd);
console.log("Son impar? ", areOddAlt);


/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

const between3and9 = numbers.filter((n) => n > 3 && n < 9);
const between3and9alt = numbers.filter(function(number){
    return number > 3 && number < 9;
});

console.log("Nuevo array: ", between3and9);
console.log("Nuevo array alt: ", between3and9alt);


/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */


const mapAlt = numbers.map(function(number){
    if (number < 0){
        return -1 
    } else {
        return +1
    }
});

// console.log("Nuevo array del map: ", map);
console.log("Nuevo array del map alt: ", mapAlt);

