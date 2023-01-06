const express = require('express');
const app = express();
// desestructuracion infocursos, para importarlo directamente
const { infoCursos } = require('./cursos-bd');
// console.log(infoCursos);
// routing sitio principal
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos');
});
// routing cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});
// routing cursos de programacion
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})
// routing cursos de matematicas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))
}) 

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});