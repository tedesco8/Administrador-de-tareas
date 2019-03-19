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

    addTask(e) {
        fetch('/api/tasks', {
            //envio una petición post
            method: 'POST',
            //convierto el objeto state a string
            body: JSON.stringify(this.state),
            //tipo de contenido 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        //Promesa para cuando retorne algo lo muestre por consola
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //ventana de materialize
            M.toast({html: 'Tarea guardada'});
            this.setState({title: '', description: ''});
        })
        //Capturador de error
        .catch(err => console.error(err)); 

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
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Titulo Tarea" value= {this.state.title}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Descripcion Tarea" className="materialize-texaerea" value= {this.state.description}></textarea>
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