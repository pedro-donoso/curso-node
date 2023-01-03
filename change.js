function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando su producto: "${producto}" en la tienda, por favor espere...`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Su producto fue ordenado...');
            } else {
                reject('Este producto no está disponible actualmente');
            }
        }, 3000);
    });
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por su compra. Disfrute su producto');
        }, 4000);
    });
}

// encadenar promesas
ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(err => {
        console.log(err);
    });

