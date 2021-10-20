import React from 'react'
import Spinner from '../basicos/Spinner'
import PanelBasico from '../basicos/PanelBasico'
import TituloSeccion from '../basicos/TituloSeccion'

export default function Generales({generales = [],cargando = true}) {
    return (
        <>
            <TituloSeccion titulo="Generales"/>
            {
                cargando ?
                (<div className="d-flex align-items-center justify-content-center">                    
                    <Spinner color="-amarillo"/>
                </div>)
                :
                <div className="row">
                {   
                    generales.map((general, index) => {
                        return <PanelBasico key={"generales-"+index} {...general} />
                    })
                }            
                </div>
            }
            
        </>
    )
}
