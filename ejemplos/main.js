// var miVariable = 5;
// //console.log ("mi edad es " + miVariable );

// miVariable = 15;
// //console.log ("mi edad ahora es " + miVariable );

// const miConstante = 10;
// //console.log( "antes era" + miConstante);

// var resultado = 2 + 5;
// //console.log("mi suma es " + resultado);

// // CONDICIONALES

// let miNumero = 6
// let miNombre = "camilo"
// /*let respuesta = miNumero == 6;
// console.log (respuesta)*/

// /*if (miNombre == "camilo"  || miNumero > 1){
// console.log("si es")
// }else{
// console.log("no es ")
// }*/
// /*let test = 0
// if (test > 0){
// console.log("es positivo")
// }else if(test === 0){
//     console.log(" es cero")
// }else{
//     console.log("el numero es negativo")
// }*/

// /*let contador = 0
// while(contador < 5){
//     console.log (contador)

//     contador = contador + 1
// }*/

// //for (let i = 50; i >= 0; i--){
// //    console.log (i);
// //}

// function saludar(nombre, edad){
//     console.log("Hola   " + nombre);
//     console.log("Tengo " + edad + " años");
// }

// function multiplicar (num1,num2){
//     let resultado = num1 * num2
//     return resultado
// }

// //let recibir = multiplicar(2,5)
// //console.log(recibir)

// //ARRAYS

// let miArreglo = ["juan", "daniel", "pedro", "cata"];

// for(let i = 0; i < 4; i++){
//     console.log("accede al indice : " + i);
//     let mostrar = miArreglo[i];
//     console.log(mostrar);

// }

// //objetos

// let persona = {
//     nombre: "camilo",
//     edad: 17,
//     sexo: "masculino"
// }

// persona.comida = "hamburguesa"
// console.log(persona.nombre)

// //let persona2 = {
//   //  nombre: "juan",
//     //edad: 4,
//     //masculino : true
// //}

// //let arregoloObjetos  = [persona, persona2]

//Funcion Flecha 

// const suma = (a,b) => {
//         return a+b;
//     }
    //console.log(suma(5,6))


//FUNCIONES CON RECURSIVIDAD

//     function aumentarNumeros(a){

//     if (a === 0){
//         return
//     }else{
//         aumentarNumeros(a-1)
//         console.log("vamos en ==> ",a );
//     }
//     }

// aumentarNumeros(10);

// const factorial = (b) => {
//     if(b === 0 ||  b === 1)
//         return 1;
//     else {
//         return b * factorial (b-1)
//     }
//     }

// console.log(factorial(5));

// const sumaNumeros = (b) => {
//         if(b === 0 ||  b === 1){
//         b++;
//             {return 1;}
//         }else {
//             return b + sumaNumeros (b-1);
//         }
//         }
// let b = 1;
// function digitosNumeros(a){

//         if (a <= 9){
//             return 1;
//         }else{
//             a = a / 10;
//             b++;
//             digitosNumeros(a);
//             return b;
//         }
//         }
    
//     console.log(digitosNumeros(111110));

// let a =  5;
// let b = 0 ;
// a > b ? console.log("es mayor ") : console.log("es menor ")

//El método indexOf Busca en el array el elemento que recibe como parámetro.Retorna el primer índice donde encontró lo que buscábamos. Si no lo encuentra, retorna un -1.
let ciudades = ["pereira","cali","bogotá"]
let indice = ciudades.push("bogotá")
console.log((indice))