import React, { Component } from 'react';

//Creo un componente de react llamado app que muestra un h1
class App extends Component {
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
                                    <form>
                                        <div className="row">
                                           <div className="input-field col s12">
                                              <input type="text" placeholder="Titulo Tarea" />
                                           </div>
                                        </div>
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