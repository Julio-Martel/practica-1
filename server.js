const express = require("express");

const aplicacion = express();

aplicacion.get('/',(req,res) => {
    res.end('Bienvenido a mi aplicacion para agregar tareas.')
})

aplicacion.listen(3000, () => {
    console.log('Servidor funcionando.')
})


