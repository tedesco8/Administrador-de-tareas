import React, { Component } from 'react';

//Creo un componente de react llamado app que muestra un h1
class App extends Component {
    render(){
        return (
            <div>
                <nav className="light-blue darken-4">
                <div className="container">
                <a className="brand-logo" href="/">MERN Stack</a>
                </div>
                </nav>
            </div>
            )
    }
}

export default App;