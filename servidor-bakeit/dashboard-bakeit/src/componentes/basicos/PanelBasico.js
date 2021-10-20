import React from 'react'

export default function PanelBasico({titulo="TITULO",label="CANTIDAD",icono=""}) {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="panel-basico shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold txt-azul-claro text-uppercase mb-1">
                                {titulo}
                            </div>
                            <div className="h5 mb-0 font-weight-bold txt-azul-claro">
                                {label}
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className={icono + " fa-2x text-gray-300"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
