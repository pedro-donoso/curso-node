const EventEmitter = require('events');
const emisorProductos = new EventEmitter();
emisorProductos.on('compra', () => {
    console.log('Se realizo una compra');
});
emisorProductos.emit('compra');