import React from 'react'

export default function PanelBasico({
    titulo="TITULO",
    label="CANTIDAD",
    icono="",
    config="col-xl-3 col-m-6 mb-4",
    className="panel-basico shadow"
}) {
    return (
        <div className={config}>
            <div className={"h-100 py-2 mt-3 " + className}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold txt-azul-claro mb-1">
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
