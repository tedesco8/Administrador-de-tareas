//archivo para que webpack encuentre la configuración
module.exports = {
    //el archivo que va a convertir
    entry: './src/app/index.js',
    //la salida del archivo convertido
    output: {
        //modulo de node, ruta
        path: __dirname + '/src/public',
        //el codigo ira aquí
        filename: 'bundle.js'
    },
    //objeto module con una propiedad rules 
    //que es un arreglo conformada por multiples objetos
    module: {
        rules: [
            {
                //webpack se comunica con babel
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};