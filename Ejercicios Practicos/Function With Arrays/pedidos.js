function procesarPedido(pedidos) {

    const nombreCliente = pedidos.shift();

    pedidos.unshift('bebida');

    pedidos.push(nombreCliente);

    return pedidos;
    }

    const pedidoCliente = ["Juan", "Pizza", "Ensalada", "Postre"];

    const pedidoProcesado = procesarPedido(pedidoCliente);

    console.log(pedidoProcesado);
