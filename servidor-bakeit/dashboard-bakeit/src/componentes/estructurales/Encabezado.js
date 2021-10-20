import React from 'react'

export default function Encabezado({encabezado="ENCABEZADO"}) {
    return (
        <div className="container-fluid seccion-encabezado shadow">
            <div className="d-flex justify-content-start align-items-center">
                <h4 className="mt-4 txt-azul-claro">{encabezado}</h4>
            </div>            
        </div>
    )
}
