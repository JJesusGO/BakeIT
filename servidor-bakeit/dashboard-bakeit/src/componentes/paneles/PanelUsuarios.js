import React from 'react'
import Tarjeta from '../basicos/Tarjeta'
import Spinner from '../basicos/Spinner'
import TituloSeccion from '../basicos/TituloSeccion'
import PanelBasico from '../basicos/PanelBasico'

function Usuario({id,nombre,correo}){    
    const titulo = <h4 className="titulo-usuario">{`(${id}) - ${nombre}`}</h4>
    const label = <p className="label-usuario mt-3">{correo}</p>;
    const clases = "panel-usuario"; 
    return <PanelBasico titulo={titulo} label={label} config="col-md-4 mb-4" className={clases}/>
}
function UsuarioDetail({id,nombre,apellidos,fecha_nacimiento,imagen,correo}){
    const titulo = (<div className="d-flex justify-content-start align-items-center flex-column">
        <img src={imagen} alt={"avatar_"+nombre}/>
    </div>)
    const label = ( <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="label-usuario mt-1 mb-3 text-center">{`(${id}) - ${nombre} ${apellidos}`}</p>
                        <p className="label-usuario my-1">Correo : {correo}</p>
                        <p className="label-usuario my-1">Fecha  : {fecha_nacimiento}</p>
                    </div>);
    const clases = "panel-usuario"; 
    return <PanelBasico titulo={titulo} label={label} config="container-fluid" className={clases}/>
}

export default function PanelUsuarios({usuarios=[],latestUsuario=null,cargando=true}) {    
    return (
        <>
            <TituloSeccion titulo="Usuarios"/>
            {
                cargando ?
                (<div className="d-flex align-items-center justify-content-center">                    
                    <Spinner color="-amarillo"/>
                </div>)
                :
                <div className="row">
                    <Tarjeta titulo="Lista de usuarios" config="col-xl-8">
                        {
                            (usuarios.length >0 )?
                                <div className="row">
                                    {
                                        usuarios.map(usuario => {
                                            return <Usuario key={"usuario"+usuario.id} {...usuario}/>
                                        })
                                    }
                                </div>
                            : <Spinner color="-amarillo"/>
                        }                        
                    </Tarjeta>
                    <Tarjeta titulo="Ultimo usuario" config="col-xl-4">
                        {
                            (latestUsuario)?
                                <UsuarioDetail {...latestUsuario}/>
                            : <Spinner color="-amarillo"/>
                        } 
                    </Tarjeta>
                </div>
            }
            
        </>
    )
}
