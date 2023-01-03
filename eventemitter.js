const EventEmitter = require('events');
const emisorProductos = new EventEmitter();
emisorProductos.on('compra', (numProductos, total) => {
    console.log(`Se realizo una compra por la cantidad de: ${numProductos} productos`);
    console.log(`Por un precio total de: ${total} pesos`);
});
emisorProductos.emit('compra', 8, 5000);





