const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
const names = students.forEach(n => console.log("names: ", n));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const indexMaria = students.findIndex((i)=> i === 'Maria');
console.log("index de María: ", indexMaria);

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const doesKaterinaExist = students.some((s)=> s === 'Katerina');
console.log("Does Katerina exist? ", doesKaterinaExist);

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const firstNameFiveLetters = students.find((s) => s.length <= 5);
console.log("Primer nombre con 5 o menos caractéres: ", firstNameFiveLetters);

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const haveMoreThanThree = students.every((s) => s.length >= 4);
console.log("Todos los strings tienen más de 4 caractéres? ", haveMoreThanThree);

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const includesIinName = students.filter((s)=> s.includes("i"));
console.log("Array with names with i: ", includesIinName);

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre 
const firstLetter = students.map(n => {
  console.log(n,"esto es n1: ", n[1]);
  return n[1]  
});

console.log("Estas son las primeras letras de cada nombre: ", firstLetter);

//por qué el método .map devuelve la posición de la letra de cada objeto? si esa notación es la de índice...
