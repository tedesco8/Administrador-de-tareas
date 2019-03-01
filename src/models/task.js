const mongoose = require('mongoose');
//Requerimos mongoose para modelar los datos a traves de schema
const { Schema } = mongoose;

//declaramos nuevo objeto, le damos sus propiedades y lo guardamos en una constante
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true}
})

//Mongoose tiene un metodo llamado model para modelar los datos
module.exports = mongoose.model('Task', TaskSchema);
