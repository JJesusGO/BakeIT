import React, { useState } from 'react'
import BaseApp from '../estructurales/BaseApp'
import Generales from '../paneles/Generales'
import useGenerales from '../../hooks/useGenerales';

export default function Home() {
    const [state, setState] = useState({
        generales : [ 
            {
                titulo: "Productos",
                key: "productos",
                label: "-",
                icono: "fas fa-ice-cream"                
            }, 
            {
                titulo: "Categorias",
                key: "categorias",
                label: "-",
                icono: "far fa-copy"
            }, 
            {
                titulo: "Recomendaciones",
                key: "recomendaciones",
                label: "-",
                icono: "far fa-comment-alt"
            }, 
            {
                titulo: "Awards",
                key: "awards",
                label: "-",
                icono: "fas fa-award"
            }, 
            {
                titulo: "Ofertas",
                key: "ofertas",
                label: "-",
                icono: "fas fa-percentage"
            }
        ]
    });
    const cargando = useGenerales((data)=>{
        setState( (prev)=>{
            for(let i = 0; i < prev.generales.length; i++)
                prev.generales[i].label = data[prev.generales[i].key];          
            return prev;
        });
    })

    return (
        <BaseApp encabezado="Home">            
            <div className="d-flex justify-content-center align-items-center">                
                <div className="container-fluid p-5 mt-1">
                    <Generales generales = {state.generales} cargando = {cargando}/>
                </div>
            </div>
        </BaseApp>
    )
}
