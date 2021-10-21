import React, { useState } from 'react'
import BaseApp from '../estructurales/BaseApp'
import Generales from '../paneles/Generales'
import useGenerales from '../../hooks/useGenerales';
import useUsuarios from '../../hooks/useUsuarios';
import useLatestUsuario from '../../hooks/useLatestUsuario';
import PanelUsuarios from '../paneles/PanelUsuarios';

export default function Home() {
    const [state, setState] = useState({
        generales : [
            {
                titulo: "USUARIOS",
                key: "usuarios",
                label: "-",
                icono: "fas fa-users"
            }
        ],
        usuarios : [],
        latestUsuario : null
    });
    const cargandoGenerales = useGenerales((data)=>{
        setState( (prev)=>{
            for(let i = 0; i < prev.generales.length; i++)
                prev.generales[i].label = data[prev.generales[i].key];          
            return prev;
        });
    });
    const cargandoUsuarios = useUsuarios((data)=>{
        setState((prev)=>{
            return {...prev,usuarios:data.users};
        })
    });
    const cargandoLatestUsuario = useLatestUsuario((data)=>{
        setState((prev)=>{
            return {...prev,latestUsuario : data};
        })
    });

    return (
        <BaseApp encabezado="Usuarios">            
            <div className="d-flex justify-content-center align-items-center">                
                <div className="container-fluid p-5 mt-1">
                    <Generales generales = {state.generales} cargando={cargandoGenerales}/>
                    <PanelUsuarios usuarios={state.usuarios} latestUsuario={state.latestUsuario} cargando={cargandoUsuarios && cargandoLatestUsuario}/>
                </div>
            </div>
        </BaseApp>
    )
}
