const http = require('http');
const {infoCursos} = require('./cursos.js');
const servidor = http.createServer((req, res) => {
    const metodo = req.method;
    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${metodo}`);
    }
});
function manejarSolicitudGET(req, res) {
    const camino = req.url;
    if (camino === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if(camino === '/api/cursos') {
        return res.end(JSON.stringify(infoCursos));
    } else if (camino === '/api/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}
function manejarSolicitudPOST(req, res) {
    const path = req.url;
    console.log(res.statusCode);
    if (path === '/api/cursos/programacion') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });
        req.on('end', () => {
            console.log(cuerpo);
               console.log(typeof cuerpo);


            return res.end('El servidor recibio una solicitud POST para api/cursos/programacion')
        });
    }
}
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});