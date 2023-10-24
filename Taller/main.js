let precios = [];
let subtotal = 0;
const productos = [
    {
        id: "Producto1",
        nombre: "Hamburguesa",
        precio: 50000,
    },
    {
        id: "Producto2",
        nombre: "Perro",
        precio: 75000,
    }
];

function calcularProductos() {
    precios = [];
    subtotal = 0;
    const checked = document.querySelectorAll("input[type=checkbox]:checked");

    for (let i = 0; i < checked.length; i++) {
        const productoId = checked[i].id;
        const producto = productos.find(p => p.id === productoId);

        if (producto) {
            precios.push(producto.nombre + ' : ' + producto.precio);
            subtotal += producto.precio;
        }
    }

    document.getElementById("listaPedidos").innerHTML = precios.join('<br>');
}

function calcularDescuento() {
    let descuentoMensaje = "";

    if (subtotal > 50000 && subtotal < 100000) {
        subtotal = subtotal * 0.90;
        descuentoMensaje = "Descuento del 10%";
    } else if (subtotal >= 100000 && subtotal < 200000) {
        subtotal = subtotal * 0.85;
        descuentoMensaje = "Descuento del 15%";
    } else if (subtotal >= 200000) {
        subtotal = subtotal * 0.80;
        descuentoMensaje = "Descuento del 20%";
    } else {
        descuentoMensaje = "Sin descuento";
    }

    document.getElementById("PrecioTotal").innerHTML = descuentoMensaje + "<br>Total: " + subtotal;
}

function ProductosNuevos() {
    document.getElementById("principal").style.display = "none";
    document.getElementById("ProductosNuevos").style.display = "block";
    document.getElementById("regresar").style.display = "block";
}

function regresarPrincipal() {
    document.getElementById("principal").style.display = "block";
    document.getElementById("ProductosNuevos").style.display = "none";
    document.getElementById("regresar").style.display = "none";
}

function agregarProductoNuevo() {
    const nombreProductoNuevo = document.getElementById("nombreProductoNuevo").value;
    const precioProductoNuevo = parseInt(document.getElementById("precioProductoNuevo").value);

    if (nombreProductoNuevo && !isNaN(precioProductoNuevo) && precioProductoNuevo > 0) {
        const nuevoProductoId = "Producto" + (productos.length + 1);
        const nuevoProducto = {
            id: nuevoProductoId,
            nombre: nombreProductoNuevo,
            precio: precioProductoNuevo,
        };

        productos.push(nuevoProducto);

        const productosActuales = document.getElementById("productosActuales");
        const label = document.createElement("label");
        label.setAttribute("for", nuevoProductoId);
        label.textContent = nombreProductoNuevo;

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", nuevoProductoId);
        input.setAttribute("value", precioProductoNuevo);

        productosActuales.appendChild(label);
        productosActuales.appendChild(input);

        alert("Producto agregado con éxito.");
    } else {
        alert("Por favor, ingrese un nombre y un precio válido para el nuevo producto.");
    }
}