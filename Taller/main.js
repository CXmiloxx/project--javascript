let precios = "";
const productoHamburguesa = document.getElementById("Producto1");
const productoPerro = document.getElementById("Producto2");
const cantidad = parseInt(document.getElementById("cantidad").value);
let subtotal = 0;

const productos = [
    {
        id: "Producto1",
        nombre: "Hamburguesa",
        precio : 50000,
    },
    {
        id: "Producto2",
        nombre: "perro",
        precio : 75000,
    }
];

const precioProductos = document.getElementById("precioProductos");

const pedido = [];

function calcularProductos(){

    let checked = document.querySelectorAll("input[type=checkbox]:checked");

    if( checked ) {
        for (let i = 0; i < checked.length; i++) {
            precios += '<li>'+ productos[i].nombre + ' : ' + productos[i].precio +' </li>';
            document.getElementById("listaPedidos").innerHTML = precios;
        
        subtotal +=  productos[i].precio;
        console.log ("pepe");
        }
    }else{
        console.log ("pepe");
    }

}