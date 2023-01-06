const express = require('express');
const app = express();
// desestructuracion infocursos, para importarlo directamente
const { infoCursos } = require('./cursos-bd');
console.log(infoCursos);
// routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos');
});
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});