
const express = require('express');
//utilizo metodo que devuelve objeto para poder ingresar rutas
const router = express.Router();

//requerimos el modelo para guardarlo en una constante y poder hacer consultas a la bd
//como estoy en al carpeta routes subo un nivel
const Task = require('../models/task');

//Obtengo todas las tareas
router.get('/', async (req, res) => {
    //consulta a la bd
    const tasks = await Task.find();
    res.json(tasks);
});

//Obtengo una tarea especifica 
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//recibo datos del usuario y guardo en la bd
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    //creo una nueva tarea 
    const task = new Task({title, description});
    //almaceno del dato en la bd
    await task.save();
    //envio el status
    res.json({status: 'Tarea Guardada'});
});

//Actualizo los datos de la tarea
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea actualizada'});
});

//Elimino una tarea
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(rew.params.id);
    res.json({status: 'Tarea Eliminada'});
})

module.exports = router;