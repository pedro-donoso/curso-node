const express = require('express');
const app = express();
// desestructuracion infocursos, para importarlo directamente
const { infoCursos } = require('./cursos-bd');
console.log(infoCursos);
// routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Curso')
})