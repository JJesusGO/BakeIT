import React from 'react'
import NavBar from '../estructurales/NavBar'
import Encabezado from './Encabezado'

export default function BaseApp({encabezado="ENCABEZADO",children = null}) {
    return (
        <div id="wrapper">        
            <NavBar/>            
            <div id="content-wrapper" className="d-flex flex-column">
                <Encabezado encabezado={encabezado}/>
                {children}
            </div>
        </div>            
    )
}
