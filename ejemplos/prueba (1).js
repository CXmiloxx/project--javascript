// let number = 8
// console.log(number)
// number = number * 2
// console.log(number)


// var a = 5;
// var b = 10;

// if (a === 5) {
//   let a = 4; // El alcance es dentro del bloque if
//   var b = 1; // El alcance es global

//   console.log(a);  // 4
//   console.log(b);  // 1
// } 

// console.log(a); // 5
// console.log(b); // 1

// -----------------------14-11-2023---------------------------------------------------------------------
//--------------------------Funciones------------------------------

function sumar(a, b) {
  return a + b
}
let result = sumar(3, 5)
//console.log("Este es el rersultado con la declaración normal: " + result)

//Function expression. Es una función que asigna un valor a una variable
const sumando = function (a, b) {
  return a + b
}
//console.log("Este es el resultado con Function expression : ", sumando(5, 6))

//Arrow Function o funciones flecha
const sum = (b, c) => b + c  //retorno implícito
const resta = (b, c) => {
  return b - c   //retorno explícito
}

//console.log("Este es el resultado con fucnción flecha: ", sum(7, 5))

//-----------------------------------Recursividad-----------------------------------------------------------
//Es una técnica de programación que consiste en que una fucnión se llame asi misma. Debe haber una condición para que el proceso no sea infinito.
//Ejemplo. Crear una función que cuente desde un número dado hasta cero.

function countDown(a) {
  if (a === 0) { return }
  else {
    console.log("Vamos en : ------> ", a)
    countDown(a - 1)
  }
}
//countDown(10)

//Ejemplo2. Crear una función que calcule el factorial de un número dado.
const factorial = (b) => {
  if (b === 0 || b === 1) { return 1 }
  else {
    return b * factorial(b - 1)
  }
}
//let number = 4
//console.log("Este es el factorial de ", number, "--->", factorial(number))

//Ejercicios. 
//Crea un método que obtenga la suma de los números naturales desde 1 hasta N. Se debe pasar como parámetro el número N.
function sumNaturales(n) {
  if (n === 0) { return }
  else {
    return n + sumNaturales(n - 1)
  }
}
//console.log("Esta es la suma de los números naturales ", sumNaturales(4))

//Crea un método que imprima los dígitos desde 1 hasta N. Se debe pasar como parámetro el número N.
function digitos(N) {
  if (N === 0) {
    return
  }
  else {
    digitos(N - 1)
    console.log("--->>", N)
  }
}
//console.log(digitos(5))

//Crea un método que obtenga la cantidad de dígitos de un número N. Se debe pasar como parámetro el número N. https://www.youtube.com/watch?v=tuCb_-bAZaY
function cantDigitos(n){
  if(n<10){return 1}      
  else{
    return 1 + cantDigitos(n/10)
  }
}
//console.log(cantDigitos(150))

//--------------------------------------Arrays-----------------------------------------------------------------
const numbers = [1,2,3,4]
let names = ["jorge","Daniel","Pedro"]
// console.log(numbers)
// console.log(names)
//---------Acceso a  los elementos de un array--------------
// console.log(numbers[0])
// console.log(names[1])
let index = 2
//console.log(numbers[index])
//---------------Modificar los elemntos de un array----------------
names[0]="Enrique"
//console.log(names[0])
//-------------------Métodos de array------------------------------
//Longitud de un array .length
//console.log("La longitud del array names es: ", names.length)
//También podemos cortar la longitud del array asignando un nuevo valor a la propiedad.legth
let frutas = ["manzana","pera","plátano", "fresa"]
frutas.length = 2
//console.log(frutas)
//console.log("Nueva longitud de frutas: ", frutas.length)

//El método .push() nos permite añadir un elemento al final de un array
frutas.push("pepino")
//console.log(frutas)

//El método push()devuelve la longitud del nuevo array
let newLength = frutas.push("ciruela")
//console.log(newLength)

//El método .pop()elimina y devuelve el último elemento de un array
let colores = ["amarillo", "azul", "rojo"]
let ultimoColor = colores.pop()
//console.log(ultimoColor)
//console.log(colores)

//El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop()pero con el primer elemento.
let meses=["enero","febrero","marzo"]
let mesEliminado = meses.shift()
// console.log(meses)
// console.log(mesEliminado)

//El método .unshift() añade un elemento al principio del array. Es lo mismo que .push() pero con el primer elemento
let dias=["lunes","martes","miércoles"]
dias.unshift("domingo")
//console.log(dias)

//.join() Une los elementos de un array utilizando el separador que le especifiquemos. Si no lo especificamos, utiliza comas.
let planetas=["tierra","marte","jupiter"]
let separadosGuiones = planetas.join("-")
//console.log(separadosGuiones)

//El método indexOf Busca en el array el elemento que recibe como parámetro.Retorna el primer índice donde encontró lo que buscábamos. Si no lo encuentra, retorna un -1.
let ciudades = ["pereira","cali","bogotá"]
let indice = ciudades.indexOf("bogot")
//console.log(indice)

//.lastIndexOf() Similar a .indexOf(), con la salvedad de que empieza buscando el elemento por el final del array (de atrás hacia adelante).  
//En caso de haber elementos repetidos, devuelve la posición del primero que encuentre (o sea el último si miramos desde el principio).
let paises = ["colombia","argentina","Brasil","argentina"]
//console.log(paises.lastIndexOf("argentina"))

//.includes() busca un elemento en el array y retorna un booleano si lo encuentra
let nomMujeres=["claudia","lorena","diana"]
//console.log(nomMujeres.includes("lor"))

//-------------------------------If ternario--------------------------------------------------
//El operador ternario lo podemos entender como una estructura compacta para hacer condicionales.
//Consiste en una expresión que se evaluará y, dependiendo de si dicha evaluación fue positiva o negativa devolverá una u otra cosa.
//expresión_condicional ? expresion1 : expresion2;
//if(3>2){console.log("Tres es mayor a dos")}
//3>8 ? console.log("Tres es mayor a dos") : console.log("Tres NO es mayor a dos")

