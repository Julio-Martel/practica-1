const express = require("express");
const aplicacion = express();
const tareas = require("./tareas/tareas");
const usuariosRegistrados = require('./usuarios/usuarios')


aplicacion.use(express.json())

aplicacion.get('/',(req,res) => {
    res.end('Bienvenido a mi mini app de tareas');
})

aplicacion.get('/tareas', (req,res) => {
    res.json(tareas);
})

aplicacion.post('/tareas', (req,res) => {

    const nuevaTarea = {
        id: req.body.id,
        nombreVidejuego: req.body.nombreVidejuego,
        Edad: req.body.Edad,
        stock: req.body.stock
    } 

    tareas.push(nuevaTarea);

    res.json(nuevaTarea);

})

aplicacion.get('/tareas', (req,res) => {
    res.end(tareas);

})

aplicacion.get('/usuarios', (req,res) => {
    res.json(usuariosRegistrados);
})

aplicacion.post('/usuarios',(req,res) => {

    const nuevoUsuario = {
        id: usuariosRegistrados.length + 1,
        nombreUsuario: req.body.nombreUsuario,
        apellidoUsuario: req.body.apellidoUsuario,
        ocupacion: req.body.ocupacion,
        edad: req.body.edad
    }

    usuariosRegistrados.push(nuevoUsuario);

    res.json(nuevoUsuario);
    console.log(usuariosRegistrados)

})


aplicacion.listen(3000, () => {
    console.log('Servidor funcionando.')
})


