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

