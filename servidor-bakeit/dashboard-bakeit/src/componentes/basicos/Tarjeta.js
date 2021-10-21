import React from 'react'

export default function Tarjeta({titulo="TITULO",config="col-xl-4 col-lg-5",children=null}) {
    return (
        <div className={config}>
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold txt-azul-claro">{titulo}</h6>                    
                </div>
                <div className="card-body">   
                    {children}                 
                </div>
            </div>
        </div>
    )
}
