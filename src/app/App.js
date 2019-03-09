import React, { Component } from 'react';

//Creo un componente de react llamado app que muestra un h1
class App extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    //deshabilito recarga del dom y obtengo estado
    addTask(e) {
        console.log(this.state);
        e.preventDefault();
    }

    //Obtendo los valores de los input y textarea
    handleChange(e) {
        //obtengo el valor
        const { name, value } = e.target;
        //cambio el estado
        this.setState({
        [name]: value
        });
    }

    render(){
        return (
            <div>
                {/*Navegación*/}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Administración de Tareas</a>
                    </div>
                </nav>
                {/*Contenido*/}
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Titulo Tarea" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Descripcion Tarea" className="materialize-texaerea"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">Enviar</button>
                                    </form>  
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>    

            </div>
            )
    }
}

export default App;