
// Comentario( // ), Variables: let, var
let nombre = "Eder Lara T";
let Nombre = 'Roger, ';
let nomBre = `Julieth`;
// Cómo debemos escribir variables:
// Forma pascal Case: Nombre
// Forma camell Case: nombreCompleto, nombre
// Forma snake Case : nombre_completo

// Forma de escribir:
// Variables = snake_case
// Funciones = cammelCase
// Clases = PascalCase

// Constantes:
const DATABASE = 'MySQL';


//console.log(nombre, Nombre, nomBre, DATABASE);

// Tipos de Datos:
// Tipos de datos primitivos (números, cadenas, booleanos, null, undefined)

let numero = 123
let enteros = 123         // int = 32,63 y piquito
let flotantes = 234.23    // float = 
let texto = `Esto es un texto @!"#$$%&//(976487.23123"`
let booleano = true || false
let dato_null = null;
let dato_indefinido;

dato_indefinido = `Hola Porque estas sola, sola te veo pasar...`
console.log(enteros, flotantes, texto, dato_indefinido )
dato_indefinido = 123.32

console.log(enteros, flotantes, texto, dato_indefinido )

// Operadores:
// Operadores aritméticos (+, -, *, /, **, //, %)

let sumando = 1
let otro_sumando = 6
let suma = sumando + otro_sumando;
console.log(suma);
let variable_texto = 'hola' + 'Por qué estás sola?' 
console.log(variable_texto);

// Estructuras de control
let numero_1 = 15
let numero_2 = 86

if (numero_1 >= numero_2){
    console.log(numero_1 + ' es mayor que '+ numero_2);
    console.log(numero_1 + numero_2);
  }
  else{
    console.log(numero_2 + ' es mayor que '+ numero_1);
    console.log(numero_2 - numero_1);
    if (numero_2 % numero_1 != 0){
      console.log('No existe un número que multiplicado por '+numero_1+ ' Me dé exactamente '+ numero_2)
    }
  }

  //

  switch (numero_1){
    case 30:
      console.log(numero_1 + ' es par');
      break;
    case 31:
      console.log('mensaje de ' + numero_2);
      break;
    default: 
      console.log(numero_2 + ' no es el número que esperabamos');
      break;
    }

    
if (numero_2 % 2 === 0){
    console.log(numero_2 + ' es par')
    
    switch (numero_2){
    case 30:
      console.log(numero_2 + ' es par');
      break;
    case 31:
      console.log('mensaje de ' + numero_2);
      break;
    default: 
      console.log(numero_2 + ' no es el número que esperabamos');
      break;
    }
  }else if(numero_2 / 7 === 12){
    console.log(numero_2 + ' es divisible por 7');
  }

  
  // Ciclos

  
for (let i=10; i <= numero_1; i++){
    console.log(i);
  }
  
  // 
  let i = 0;
  while (i <= numero_1){
    // todo programa
    console.log(i);
    i = i + 1;
  }
  // 
  let j = 0
  do {
    console.log(j);
    j = j + 1;
  }while (j <= numero_1)
  

// Seleccionar por ID
let elementoPorId = document.getElementById("miElemento");

// Seleccionar por clase
let elementosPorClase = document.getElementsByClassName("miClase");

// Seleccionar por etiqueta
let elementosPorEtiqueta = document.getElementsByTagName("div");

// Seleccionar usando un selector CSS
let elementoPorSelector = document.querySelector(".miClase");
let elementosPorSelectorTodos = document.querySelectorAll(".miClase");