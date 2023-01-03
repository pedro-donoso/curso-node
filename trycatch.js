const estatusPedido = () => {
    return Math.random() < 0.8;
};
const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza está en camino');
        } else {
            reject('Ocurrió un error. Por favor intente nuevamente');
        }
    }, 3000);
});
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });