/* const EventEmitter = require('events');
const emisorProductos = new EventEmitter();
emisorProductos.on('compra', (numProductos, total) => {
    console.log(`Se realizo una compra por la cantidad de: ${numProductos} productos`);
    console.log(`Por un precio total de: ${total} pesos`);
});
emisorProductos.emit('compra', 8, 5000); */

// ejemplo

/* const promesaCumplida = true;
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('¡Promesa cumplida!');
        } else {
            reject('Promesa rechazada...');
        }
    }, 3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}
const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
}
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada); */

// pizzas

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
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });

