import React from 'react';
import { useSelector } from 'react-redux';


function Menu() {
    const stateTitulo = useSelector((state) => 
    state.tituloReducer.titulo
    )

    

    return (
        <div >
            <nav className="navbar  navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb=3 h1"> Redux </span>
                    <span className="text-white" aria-disabled="true">você digitou: </span>
                    <span className="text-white">{stateTitulo}</span>
                 
                </div>
            </nav>

        </div>
    )
}

export default Menu;