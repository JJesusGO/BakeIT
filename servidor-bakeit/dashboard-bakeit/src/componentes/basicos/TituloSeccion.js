import React from 'react'

export default function TituloSeccion({titulo="ERROR"}) {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{titulo}</h1>                        
        </div>
    )
}
