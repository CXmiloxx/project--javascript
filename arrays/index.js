//saber csntidad de elementos en el array

/*const miArray = ["juan", "daniel", "david"];
const Array = miArray.length;

console.log(Array);*/

//acceder a los elementos del array

/*const miArray = ["juan", "daniel", "david"];
const Array = miArray[0];

console.log(Array);*/

//agregar elementos

/*const miArray = ["juan", "daniel", "david"];
const Array = miArray.push("jose");

console.log(Array);

miArray.unshift("pipe")

console.log(miArray);*/

//eliminar elementos

/*const miArray = ["juan", "daniel", "david"];

console.log(miArray) // imprime todos los elementos

let final = miArray.pop() // imprime el ultimo objeto del array

console.log(miArray) // elimina el ultimo elemento del array

console.log(final)

// otros ejemplo de eliminar objetos

let inicio = miArray.shift()
console.log(miArray)
//imprime un elemento del objeto
*/

//recorrer arrays y los muestra en consola
/*
const nombres = ["juan", "daniel", "david"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
} */

//metodo mas avanzado para recorrer arrays
/*
const nombres = ["juan", "daniel", "david"];

nombres.forEach((nombre, index) => {
    console.log(nombre, index);
});
*/


//crear objetos

/*const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25
}*/

//acceder a una propiredad
/*
const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25
}

let edad = persona1.edad
console.log(edad)
*/

//editar propiedad

/*const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25
}

persona1.edad = 30

*/

//agregar propiedad
/*
const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
};

persona1.sexo = "hombre";

console.log(persona1.sexo);
*/

//borrar propiedad

/*const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
    }

delete persona1.edad;

console.log(persona1);
*/

//Recorrer objetos
/*
const persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
}
for (let key in persona1){
    console.log(key, persona1[key]);
}
*/

//combinacion de arrys
/*
const objetos =[ 
    {
        nombre: "juan",
        apellido: "guapacha",
        edad: 17,
    },
    {
        nombre: "daniel",
        apellido: "perez",
        edad: 25,
    },
    {
        nombre: "david",
        apellido: "largo",
        edad: 45,
    },
    {
        nombre: "lala",
        apellido: "perez",
        edad: 25,

    }
];

for (let i = 0; i < objetos.length; i++){
    console.log("============================")
    console.log("nombre: " + objetos[i].nombre)
    console.log("apellido: " + objetos[i].apellido)
    console.log("edad: " + objetos[i].edad)
} */

const objeto = {
    nombre: "Objeto del array",
    arr: ["arbol", "hueco", "humano", "dado"],
};

objeto.arr.forEach(elemento =>{
    console.log(elemento + "hola");

}
    )


