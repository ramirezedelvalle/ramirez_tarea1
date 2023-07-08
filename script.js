// Variables
const stringVar = 'ejemplo';
const numberVar = 11544;
const booleanVar = false;
const booleanVar2 = true;

// Constante
const nombre = 'Ramirez';
console.log(nombre);

// Inicializar una variable
let numero = 11.544;
console.log(numero);

// Null y Undefined
let numeroNull = null;
alert(numeroNull);

// Tipo de dato Booleano
let bool = true;
console.log(bool);
let bool2 = false;
console.log(bool2);

// Operadores Matemáticos
let numero1 = 5, numero2 = 10;
console.log(numero1 * numero2);

// Concatenación
let nombre1 = 'Benjamin ', apellido1 = 'Ramirez';
console.log(nombre1 + apellido1);

// Operadores de Comparación
let numeroA = 50;
let numeroB = 78;
console.log(numeroA == numeroB);
console.log(numeroA != numeroB);
console.log(numeroA === numeroB);
console.log(numeroA !== numeroB);
console.log(numeroA > numeroB);
console.log(numeroA < numeroB);

// Condicionales if, else if, else
let nombre2 = 'Benjamin Ramirez';
if (nombre2 == 'Benjamin') {
    console.log('Tu nombre es ' + nombre2);
} else if (nombre2 == 'Ramirez') {
    console.log('Tu nombre es ' + nombre2);
} else if (nombre2 == 'Benjamin Ramirez') {
    console.log('Tu nombre es ' + nombre2);
} else {
    console.log('Tu nombre no coincide');
}

// Creación de Objetos
let persona = {
    nombre: 'Ramirez',
    peso: 160,
    edad: 24,
    altura: 1.68,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
console.log(persona);

// Estructura do-while
let i = 0;
do {
  console.log("Iteración con do-while: " + i);
  i++;
} while (i < 5);

// Estructura for
for (let j = 0; j < 5; j++) {
  console.log("Iteración con for: " + j);
}

// Estructura forEach
const array = [1, 2, 3, 4, 5];
console.log("Iteración con forEach:");
array.forEach(function(element) {
  console.log(element);
});

//Ejemplos de métodos de cadena (String methods):

// Ejemplo de toUpperCase() y toLowerCase()
let mensaje = "Hola Mundo";
console.log(mensaje.toUpperCase()); // Resultado: HOLA MUNDO
console.log(mensaje.toLowerCase()); // Resultado: hola mundo

// Ejemplo de length()
let texto = "JavaScript";
console.log(texto.length); // Resultado: 10

// Ejemplo de charAt()
let palabra = "Hola";
console.log(palabra.charAt(2)); // Resultado: l

// Ejemplo de substring()
let frase = "Programación en JavaScript";
console.log(frase.substring(13, 23)); // Resultado: JavaScript

//Ejemplos de métodos de arreglo (Array methods):

// Ejemplo de push() y pop()
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // Resultado: [1, 2, 3, 4]
numeros.pop();
console.log(numeros); // Resultado: [1, 2, 3]

// Ejemplo de shift() y unshift()
let frutas = ["manzana", "naranja", "banana"];
frutas.shift();
console.log(frutas); // Resultado: ["naranja", "banana"]
frutas.unshift("pera");
console.log(frutas); // Resultado: ["pera", "naranja", "banana"]

// Ejemplo de length()
let animales = ["gato", "perro", "conejo", "elefante"];
console.log(animales.length); // Resultado: 4

// Ejemplo de forEach()
let numeros2 = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero);
});
// Resultado:
// 1
// 2
// 3
// 4
// 5

//Ejemplos de métodos matemáticos (Math methods):

// Ejemplo de Math.random()
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Resultado: un número aleatorio entre 0 y 1

// Ejemplo de Math.floor()
let numeroDecimal = 3.75;
let numeroEntero = Math.floor(numeroDecimal);
console.log(numeroEntero); // Resultado: 3

