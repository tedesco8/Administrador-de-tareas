
const express = require('express');
//utilizo metodo que devuelve objeto para poder ingresar rutas
const router = express.Router();

//requerimos el modelo para guardarlo en una constante y poder hacer consultas a la bd
//como estoy en al carpeta routes subo un nivel
const Task = require('../models/task');

//retorno un objeto de tipo json
router.get('/', async (req, res) => {
    //consulta a la bd
    const tasks = await Task.find();
    res.json(tasks);
});

//recibo datos del usuario y retorno un json
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    //creo una nueva tarea 
    new Task({title, description});
    //almaceno del dato en la bd
    await task.save();
    //envio el status
    res.json({status: 'recibido'});
});

module.exports = router;