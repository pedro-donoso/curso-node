const http = require('http');
const servidor = http.createServer((req, res) => {
    console.log('===> res (respuesta)');
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());
    res.end('Hola mundo');
});
const PUERTO = 4000;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});