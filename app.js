const http = require('http');
const cursos = require('./cursos.js');
const servidor = http.createServer((req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`);
    }
});
function manejarSolicitudGET(req, res) {
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if(path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
}
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

