//importo libreria de servidor
const express = require('express');
//modulo que permite registrar o ver por consola cualquier peticion que llegan desde el navegador o cliente al servidor
const morgan = require('morgan');
//modulo que encuentra index
const path = require('path');

//requiero desde el archivo llamado database el modulo mongoose
const { mongoose } = require('./database');

//guardo ejecucion de express en constante app
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);

//Middlewares, funciones que se ejutan antes de que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json());

//Rutas (url)
app.use('/api/tasks' ,require('./routes/task.routes'));

//Archivos estaticos, encuentra la carpeta 
app.use(express.static(path.join(__dirname, 'public')))

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
