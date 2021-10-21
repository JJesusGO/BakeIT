import React, { useState } from 'react'
import BaseApp from '../estructurales/BaseApp'
import Generales from '../paneles/Generales'
import useGenerales from '../../hooks/useGenerales';
import useProductos from '../../hooks/useProductos';
import useLatestProducto from '../../hooks/useLatestProducto';
import PanelProductos from '../paneles/PanelProductos';

export default function Home() {
    const [state, setState] = useState({
        generales : [ 
            {
                titulo: "PRODUCTOS",
                key: "productos",
                label: "-",
                icono: "fas fa-ice-cream"                
            }, 
            {
                titulo: "CATEGORIAS",
                key: "categorias",
                label: "-",
                icono: "far fa-copy"
            }, 
            {
                titulo: "RECOMENDACIONES",
                key: "recomendaciones",
                label: "-",
                icono: "far fa-comment-alt"
            }, 
            {
                titulo: "AWARDS",
                key: "awards",
                label: "-",
                icono: "fas fa-award"
            }, 
            {
                titulo: "OFERTAS",
                key: "ofertas",
                label: "-",
                icono: "fas fa-percentage"
            }
        ],
        productos : [],
        categorias : [],
        latestProducto : null
    });
    const cargando = useGenerales((data)=>{
        setState( (prev)=>{
            for(let i = 0; i < prev.generales.length; i++)
                prev.generales[i].label = data[prev.generales[i].key];          
            return prev;
        });
    })
    const cargandoProductos = useProductos((data)=>{
        setState((prev)=>{            
            return {...prev,productos:data.products,categorias:data.countByCategory};
        })
    });
    const cargandoLatestProducto = useLatestProducto((data)=>{
        setState((prev)=>{            
            return {...prev,latestProducto: data};
        })
    });

    return (
        <BaseApp encabezado="Productos">            
            <div className="d-flex justify-content-center align-items-center">                
                <div className="container-fluid p-5 mt-1">
                    <Generales generales = {state.generales} cargando = {cargando}/>
                    <PanelProductos productos={state.productos} 
                                    categorias={state.categorias}
                                    latestProducto={state.latestProducto} 
                                    cargando={cargandoProductos && cargandoLatestProducto}/>
                </div>
            </div>
        </BaseApp>
    )
}
