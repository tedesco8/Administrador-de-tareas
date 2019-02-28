
const express = require('express');
//utilizo metodo que devuelve objeto para poder ingresar rutas
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Works!'
    })
});

module.exports = router;