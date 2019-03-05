import React, { Component } from 'react';
import { render } from 'react-dom';

//Creo un componente llamado app que muestra un h1
class App extends Component {
    render(){
        return (
            <h1>Hola Mundo</h1>
        )
    }
}
render(<App/>, document.getElementById('app'));