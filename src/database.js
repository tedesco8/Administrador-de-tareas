const mongoose = require('mongoose');

//sentencia de conexion
const URI = 'mongodb://localhost/admin-tareas';

//conexion a la bd
mongoose.connect(URI)
      //si se conecta muestra mensaje en consola
     .then(db => console.log('Base de Datos Conectada'))
     //si hay un error muestra un mensaje en consla
     .catch(err => console.error(err));

     module.exports = mongoose;