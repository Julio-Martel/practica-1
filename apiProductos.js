const express = require('express');
const aplicacion = express();
const productos = require("./productos/productos");

aplicacion.use(express.json());

aplicacion.get('/productos', (req,res) => {
    if(productos.length === 0){
        res.end('No hay productos cargados por el momento');
    } else {
        res.json(productos);
    }
})

aplicacion.post('/productos', (req,res) => {
    
    const nuevoProducto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stock: req.body.stock
    }

    if(productos.length === 0){
        productos.push(nuevoProducto)
        res.json(nuevoProducto)  
    } else {
        const productoincluido = productos.some(prod => prod.codigo === nuevoProducto.codigo);

        if(productoincluido){
            res.end('producto ya cargado');
        } else {
            productos.push(nuevoProducto);
            res.json(nuevoProducto);
        }
    }
})

aplicacion.listen(3000,() => {
    console.log('Servidor funcionando 100%');
})



